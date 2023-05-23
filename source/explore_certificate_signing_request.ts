// ---------------------------------------------------------------------------------------------------------------------
// node-opcua-crypto
// ---------------------------------------------------------------------------------------------------------------------
// Copyright (c) 2014-2022 - Etienne Rossignon - etienne.rossignon (at) gadz.org
// Copyright (c) 2022-2023 - Sterfive.com
// ---------------------------------------------------------------------------------------------------------------------
//
// This  project is licensed under the terms of the MIT license.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so,  subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
// Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
// WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// ---------------------------------------------------------------------------------------------------------------------

import { BlockInfo, readTag, _findBlockAtIndex, _getBlock, _readObjectIdentifier, _readStruct, _readVersionValue } from "./asn1.js";

import { BasicConstraints, X509KeyUsage, _readExtension } from "./crypto_explore_certificate.js";

export interface ExtensionRequest {
    basicConstraints: BasicConstraints;
    keyUsage: X509KeyUsage;
    subjectAltName: any;
}
export interface CertificateSigningRequestInfo {
    extensionRequest: ExtensionRequest;
}

function _readExtensionRequest(buffer: Buffer): ExtensionRequest {
    const block = readTag(buffer, 0);

    const inner_blocks = _readStruct(buffer, block);
    const extensions = inner_blocks.map((block1) => _readExtension(buffer, block1));

    const result: any = {};
    for (const e of extensions) {
        result[e.identifier.name] = e.value;
    }
    const { basicConstraints, keyUsage, subjectAltName } = result;
    return { basicConstraints, keyUsage, subjectAltName };
}

export function readCertificationRequestInfo(buffer: Buffer, block: BlockInfo): CertificateSigningRequestInfo {
    const blocks = _readStruct(buffer, block);
    if (blocks.length === 4) {
        const extensionRequestBlock = _findBlockAtIndex(blocks, 0);
        if (!extensionRequestBlock) {
            throw new Error("cannot find extensionRequest block");
        }
        const blocks1 = _readStruct(buffer, extensionRequestBlock);
        const blocks2 = _readStruct(buffer, blocks1[0]);
        const identifier = _readObjectIdentifier(buffer, blocks2[0]);
        if (identifier.name !== "extensionRequest") {
            throw new Error(" Cannot find extension Request in ASN1 block");
        }
        const buf = _getBlock(buffer, blocks2[1]);

        const extensionRequest = _readExtensionRequest(buf);

        return { extensionRequest };
    }
    throw new Error("Invalid CSR or ");
}

// see https://tools.ietf.org/html/rfc2986 : Certification Request Syntax Specification Version 1.7

export function exploreCertificateSigningRequest(crl: Buffer): CertificateSigningRequestInfo {
    const blockInfo = readTag(crl, 0);
    const blocks = _readStruct(crl, blockInfo);
    const csrInfo = readCertificationRequestInfo(crl, blocks[0]);
    return csrInfo;
}
