// https://github.com/lapo-luchini/asn1js/blob/master/oids.js
export const oid_map: { [key: string]: { d: string; c: string; w?: boolean } } = {
    "0.9.2342.19200300.100.1.1": { d: "userID", c: "Some oddball X.500 attribute collection" },
    "0.9.2342.19200300.100.1.3": { d: "rfc822Mailbox", c: "Some oddball X.500 attribute collection" },
    "0.9.2342.19200300.100.1.25": { d: "domainComponent", c: "Men are from Mars, this OID is from Pluto" },

    "1.2.840.113549.1.1": { d: "pkcs-1", c: "", w: false },
    "1.2.840.113549.1.1.1": { d: "rsaEncryption", c: "PKCS #1", w: false },
    "1.2.840.113549.1.1.2": { d: "md2WithRSAEncryption", c: "PKCS #1", w: false },
    "1.2.840.113549.1.1.3": { d: "md4WithRSAEncryption", c: "PKCS #1", w: false },
    "1.2.840.113549.1.1.4": { d: "md5WithRSAEncryption", c: "PKCS #1", w: false },
    "1.2.840.113549.1.1.5": { d: "sha1WithRSAEncryption", c: "PKCS #1", w: false },
    "1.2.840.113549.1.1.7": { d: "rsaOAEP", c: "PKCS #1", w: false },
    "1.2.840.113549.1.1.8": { d: "pkcs1-MGF", c: "PKCS #1", w: false },
    "1.2.840.113549.1.1.9": { d: "rsaOAEP-pSpecified", c: "PKCS #1", w: false },
    "1.2.840.113549.1.1.10": { d: "rsaPSS", c: "PKCS #1", w: false },
    "1.2.840.113549.1.1.11": { d: "sha256WithRSAEncryption", c: "PKCS #1", w: false },
    "1.2.840.113549.1.1.12": { d: "sha384WithRSAEncryption", c: "PKCS #1", w: false },
    "1.2.840.113549.1.1.13": { d: "sha512WithRSAEncryption", c: "PKCS #1", w: false },
    "1.2.840.113549.1.1.14": { d: "sha224WithRSAEncryption", c: "PKCS #1", w: false },

    "1.2.840.113549.1.9.1": {
        d: "emailAddress",
        c: "PKCS #9. Deprecated, use an altName extension instead",
        w: false,
    },
    "1.2.840.113549.1.9.2": { d: "unstructuredName", c: "PKCS #9", w: false },
    "1.2.840.113549.1.9.3": { d: "contentType", c: "PKCS #9", w: false },
    "1.2.840.113549.1.9.4": { d: "messageDigest", c: "PKCS #9", w: false },
    "1.2.840.113549.1.9.5": { d: "signingTime", c: "PKCS #9", w: false },
    "1.2.840.113549.1.9.6": { d: "countersignature", c: "PKCS #9", w: false },
    "1.2.840.113549.1.9.7": { d: "challengePassword", c: "PKCS #9", w: false },
    "1.2.840.113549.1.9.8": { d: "unstructuredAddress", c: "PKCS #9", w: false },
    "1.2.840.113549.1.9.9": { d: "extendedCertificateAttributes", c: "PKCS #9", w: false },
    "1.2.840.113549.1.9.10": { d: "issuerAndSerialNumber", c: "PKCS #9 experimental", w: true },
    "1.2.840.113549.1.9.11": { d: "passwordCheck", c: "PKCS #9 experimental", w: true },
    "1.2.840.113549.1.9.12": { d: "publicKey", c: "PKCS #9 experimental", w: true },
    "1.2.840.113549.1.9.13": { d: "signingDescription", c: "PKCS #9", w: false },
    "1.2.840.113549.1.9.14": { d: "extensionRequest", c: "PKCS #9 via CRMF", w: false },

    "1.3.6.1.5.5.7.3.1": { d: "serverAuth", c: "PKIX key purpose" },
    "1.3.6.1.5.5.7.3.2": { d: "clientAuth", c: "PKIX key purpose" },
    "1.3.6.1.5.5.7.3.3": { d: "codeSigning", c: "PKIX key purpose" },
    "1.3.6.1.5.5.7.3.4": { d: "emailProtection", c: "PKIX key purpose" },
    "1.3.6.1.5.5.7.3.5": { d: "ipsecEndSystem", c: "PKIX key purpose" },
    "1.3.6.1.5.5.7.3.6": { d: "ipsecTunnel", c: "PKIX key purpose" },
    "1.3.6.1.5.5.7.3.7": { d: "ipsecUser", c: "PKIX key purpose" },
    "1.3.6.1.5.5.7.3.8": { d: "timeStamping", c: "PKIX key purpose" },
    "1.3.6.1.5.5.7.3.9": { d: "ocspSigning", c: "PKIX key purpose" },
    "1.3.6.1.5.5.7.3.10": { d: "dvcs", c: "PKIX key purpose" },
    "1.3.6.1.5.5.7.3.11": { d: "sbgpCertAAServerAuth", c: "PKIX key purpose" },
    "1.3.6.1.5.5.7.3.13": { d: "eapOverPPP", c: "PKIX key purpose" },
    "1.3.6.1.5.5.7.3.14": { d: "eapOverLAN", c: "PKIX key purpose" },

    "2.5.4.0": { d: "objectClass", c: "X.520 DN component", w: false },
    "2.5.4.1": { d: "aliasedEntryName", c: "X.520 DN component", w: false },
    "2.5.4.2": { d: "knowledgeInformation", c: "X.520 DN component", w: false },
    "2.5.4.3": { d: "commonName", c: "X.520 DN component", w: false },
    "2.5.4.4": { d: "surname", c: "X.520 DN component", w: false },
    "2.5.4.5": { d: "serialNumber", c: "X.520 DN component", w: false },
    "2.5.4.6": { d: "countryName", c: "X.520 DN component", w: false },
    "2.5.4.7": { d: "localityName", c: "X.520 DN component", w: false },
    "2.5.4.7.1": { d: "collectiveLocalityName", c: "X.520 DN component", w: false },
    "2.5.4.8": { d: "stateOrProvinceName", c: "X.520 DN component", w: false },
    "2.5.4.8.1": { d: "collectiveStateOrProvinceName", c: "X.520 DN component", w: false },
    "2.5.4.9": { d: "streetAddress", c: "X.520 DN component", w: false },
    "2.5.4.9.1": { d: "collectiveStreetAddress", c: "X.520 DN component", w: false },
    "2.5.4.10": { d: "organizationName", c: "X.520 DN component", w: false },
    "2.5.4.10.1": { d: "collectiveOrganizationName", c: "X.520 DN component", w: false },
    "2.5.4.11": { d: "organizationalUnitName", c: "X.520 DN component", w: false },
    "2.5.4.11.1": { d: "collectiveOrganizationalUnitName", c: "X.520 DN component", w: false },
    "2.5.4.12": { d: "title", c: "X.520 DN component", w: false },
    "2.5.4.13": { d: "description", c: "X.520 DN component", w: false },
    "2.5.4.14": { d: "searchGuide", c: "X.520 DN component", w: false },
    "2.5.4.15": { d: "businessCategory", c: "X.520 DN component", w: false },
    "2.5.4.16": { d: "postalAddress", c: "X.520 DN component", w: false },
    "2.5.4.16.1": { d: "collectivePostalAddress", c: "X.520 DN component", w: false },
    "2.5.4.17": { d: "postalCode", c: "X.520 DN component", w: false },
    "2.5.4.17.1": { d: "collectivePostalCode", c: "X.520 DN component", w: false },
    "2.5.4.18": { d: "postOfficeBox", c: "X.520 DN component", w: false },
    "2.5.4.18.1": { d: "collectivePostOfficeBox", c: "X.520 DN component", w: false },
    "2.5.4.19": { d: "physicalDeliveryOfficeName", c: "X.520 DN component", w: false },
    "2.5.4.19.1": { d: "collectivePhysicalDeliveryOfficeName", c: "X.520 DN component", w: false },
    "2.5.4.20": { d: "telephoneNumber", c: "X.520 DN component", w: false },
    "2.5.4.20.1": { d: "collectiveTelephoneNumber", c: "X.520 DN component", w: false },
    "2.5.4.21": { d: "telexNumber", c: "X.520 DN component", w: false },
    "2.5.4.21.1": { d: "collectiveTelexNumber", c: "X.520 DN component", w: false },
    "2.5.4.22": { d: "teletexTerminalIdentifier", c: "X.520 DN component", w: false },
    "2.5.4.22.1": { d: "collectiveTeletexTerminalIdentifier", c: "X.520 DN component", w: false },
    "2.5.4.23": { d: "facsimileTelephoneNumber", c: "X.520 DN component", w: false },
    "2.5.4.23.1": { d: "collectiveFacsimileTelephoneNumber", c: "X.520 DN component", w: false },
    "2.5.4.24": { d: "x121Address", c: "X.520 DN component", w: false },
    "2.5.4.25": { d: "internationalISDNNumber", c: "X.520 DN component", w: false },
    "2.5.4.25.1": { d: "collectiveInternationalISDNNumber", c: "X.520 DN component", w: false },
    "2.5.4.26": { d: "registeredAddress", c: "X.520 DN component", w: false },
    "2.5.4.27": { d: "destinationIndicator", c: "X.520 DN component", w: false },
    "2.5.4.28": { d: "preferredDeliveryMehtod", c: "X.520 DN component", w: false },
    "2.5.4.29": { d: "presentationAddress", c: "X.520 DN component", w: false },
    "2.5.4.30": { d: "supportedApplicationContext", c: "X.520 DN component", w: false },
    "2.5.4.31": { d: "member", c: "X.520 DN component", w: false },
    "2.5.4.32": { d: "owner", c: "X.520 DN component", w: false },
    "2.5.4.33": { d: "roleOccupant", c: "X.520 DN component", w: false },
    "2.5.4.34": { d: "seeAlso", c: "X.520 DN component", w: false },
    "2.5.4.35": { d: "userPassword", c: "X.520 DN component", w: false },
    "2.5.4.36": { d: "userCertificate", c: "X.520 DN component", w: false },
    "2.5.4.37": { d: "caCertificate", c: "X.520 DN component", w: false },
    "2.5.4.38": { d: "authorityRevocationList", c: "X.520 DN component", w: false },
    "2.5.4.39": { d: "certificateRevocationList", c: "X.520 DN component", w: false },
    "2.5.4.40": { d: "crossCertificatePair", c: "X.520 DN component", w: false },
    "2.5.4.41": { d: "name", c: "X.520 DN component", w: false },
    "2.5.4.42": { d: "givenName", c: "X.520 DN component", w: false },
    "2.5.4.43": { d: "initials", c: "X.520 DN component", w: false },
    "2.5.4.44": { d: "generationQualifier", c: "X.520 DN component", w: false },
    "2.5.4.45": { d: "uniqueIdentifier", c: "X.520 DN component", w: false },
    "2.5.4.46": { d: "dnQualifier", c: "X.520 DN component", w: false },
    "2.5.4.47": { d: "enhancedSearchGuide", c: "X.520 DN component", w: false },
    "2.5.4.48": { d: "protocolInformation", c: "X.520 DN component", w: false },
    "2.5.4.49": { d: "distinguishedName", c: "X.520 DN component", w: false },
    "2.5.4.50": { d: "uniqueMember", c: "X.520 DN component", w: false },
    "2.5.4.51": { d: "houseIdentifier", c: "X.520 DN component", w: false },
    "2.5.4.52": { d: "supportedAlgorithms", c: "X.520 DN component", w: false },
    "2.5.4.53": { d: "deltaRevocationList", c: "X.520 DN component", w: false },
    "2.5.4.54": { d: "dmdName", c: "X.520 DN component", w: false },
    "2.5.4.55": { d: "clearance", c: "X.520 DN component", w: false },
    "2.5.4.56": { d: "defaultDirQop", c: "X.520 DN component", w: false },
    "2.5.4.57": { d: "attributeIntegrityInfo", c: "X.520 DN component", w: false },
    "2.5.4.58": { d: "attributeCertificate", c: "X.520 DN component", w: false },
    "2.5.4.59": { d: "attributeCertificateRevocationList", c: "X.520 DN component", w: false },
    "2.5.4.60": { d: "confKeyInfo", c: "X.520 DN component", w: false },
    "2.5.4.61": { d: "aACertificate", c: "X.520 DN component", w: false },
    "2.5.4.62": { d: "attributeDescriptorCertificate", c: "X.520 DN component", w: false },
    "2.5.4.63": { d: "attributeAuthorityRevocationList", c: "X.520 DN component", w: false },
    "2.5.4.64": { d: "familyInformation", c: "X.520 DN component", w: false },
    "2.5.4.65": { d: "pseudonym", c: "X.520 DN component", w: false },
    "2.5.4.66": { d: "communicationsService", c: "X.520 DN component", w: false },
    "2.5.4.67": { d: "communicationsNetwork", c: "X.520 DN component", w: false },
    "2.5.4.68": { d: "certificationPracticeStmt", c: "X.520 DN component", w: false },
    "2.5.4.69": { d: "certificatePolicy", c: "X.520 DN component", w: false },
    "2.5.4.70": { d: "pkiPath", c: "X.520 DN component", w: false },
    "2.5.4.71": { d: "privPolicy", c: "X.520 DN component", w: false },
    "2.5.4.72": { d: "role", c: "X.520 DN component", w: false },
    "2.5.4.73": { d: "delegationPath", c: "X.520 DN component", w: false },
    "2.5.4.74": { d: "protPrivPolicy", c: "X.520 DN component", w: false },
    "2.5.4.75": { d: "xMLPrivilegeInfo", c: "X.520 DN component", w: false },
    "2.5.4.76": { d: "xmlPrivPolicy", c: "X.520 DN component", w: false },
    "2.5.4.82": { d: "permission", c: "X.520 DN component", w: false },
    "2.5.6.0": { d: "top", c: "X.520 objectClass", w: false },
    "2.5.6.1": { d: "alias", c: "X.520 objectClass", w: false },
    "2.5.6.2": { d: "country", c: "X.520 objectClass", w: false },
    "2.5.6.3": { d: "locality", c: "X.520 objectClass", w: false },
    "2.5.6.4": { d: "organization", c: "X.520 objectClass", w: false },
    "2.5.6.5": { d: "organizationalUnit", c: "X.520 objectClass", w: false },
    "2.5.6.6": { d: "person", c: "X.520 objectClass", w: false },
    "2.5.6.7": { d: "organizationalPerson", c: "X.520 objectClass", w: false },
    "2.5.6.8": { d: "organizationalRole", c: "X.520 objectClass", w: false },
    "2.5.6.9": { d: "groupOfNames", c: "X.520 objectClass", w: false },
    "2.5.6.10": { d: "residentialPerson", c: "X.520 objectClass", w: false },
    "2.5.6.11": { d: "applicationProcess", c: "X.520 objectClass", w: false },
    "2.5.6.12": { d: "applicationEntity", c: "X.520 objectClass", w: false },
    "2.5.6.13": { d: "dSA", c: "X.520 objectClass", w: false },
    "2.5.6.14": { d: "device", c: "X.520 objectClass", w: false },
    "2.5.6.15": { d: "strongAuthenticationUser", c: "X.520 objectClass", w: false },
    "2.5.6.16": { d: "certificateAuthority", c: "X.520 objectClass", w: false },
    "2.5.6.17": { d: "groupOfUniqueNames", c: "X.520 objectClass", w: false },
    "2.5.6.21": { d: "pkiUser", c: "X.520 objectClass", w: false },
    "2.5.6.22": { d: "pkiCA", c: "X.520 objectClass", w: false },

    "2.5.29.1": { d: "authorityKeyIdentifier", c: "X.509 extension. Deprecated, use 2 5 29 35 instead", w: true },
    "2.5.29.2": { d: "keyAttributes", c: "X.509 extension. Obsolete, use keyUsage/extKeyUsage instead", w: true },
    "2.5.29.3": { d: "certificatePolicies", c: "X.509 extension. Deprecated, use 2 5 29 32 instead", w: true },
    "2.5.29.4": {
        d: "keyUsageRestriction",
        c: "X.509 extension. Obsolete, use keyUsage/extKeyUsage instead",
        w: true,
    },
    "2.5.29.5": { d: "policyMapping", c: "X.509 extension. Deprecated, use 2 5 29 33 instead", w: true },
    "2.5.29.6": { d: "subtreesConstraint", c: "X.509 extension. Obsolete, use nameConstraints instead", w: true },
    "2.5.29.7": { d: "subjectAltName", c: "X.509 extension. Deprecated, use 2 5 29 17 instead", w: true },
    "2.5.29.8": { d: "issuerAltName", c: "X.509 extension. Deprecated, use 2 5 29 18 instead", w: true },
    "2.5.29.9": { d: "subjectDirectoryAttributes", c: "X.509 extension", w: false },
    "2.5.29.10": { d: "basicConstraints", c: "X.509 extension. Deprecated, use 2 5 29 19 instead", w: true },
    "2.5.29.11": { d: "nameConstraints", c: "X.509 extension. Deprecated, use 2 5 29 30 instead", w: true },
    "2.5.29.12": { d: "policyConstraints", c: "X.509 extension. Deprecated, use 2 5 29 36 instead", w: true },
    "2.5.29.13": { d: "basicConstraints", c: "X.509 extension. Deprecated, use 2 5 29 19 instead", w: true },
    "2.5.29.14": { d: "subjectKeyIdentifier", c: "X.509 extension", w: false },
    "2.5.29.15": { d: "keyUsage", c: "X.509 extension", w: false },
    "2.5.29.16": { d: "privateKeyUsagePeriod", c: "X.509 extension", w: false },
    "2.5.29.17": { d: "subjectAltName", c: "X.509 extension", w: false },
    "2.5.29.18": { d: "issuerAltName", c: "X.509 extension", w: false },
    "2.5.29.19": { d: "basicConstraints", c: "X.509 extension", w: false },
    "2.5.29.20": { d: "cRLNumber", c: "X.509 extension", w: false },
    "2.5.29.21": { d: "cRLReason", c: "X.509 extension", w: false },
    "2.5.29.22": { d: "expirationDate", c: "X.509 extension. Deprecated, alternative OID uncertain", w: true },
    "2.5.29.23": { d: "instructionCode", c: "X.509 extension", w: false },
    "2.5.29.24": { d: "invalidityDate", c: "X.509 extension", w: false },
    "2.5.29.25": { d: "cRLDistributionPoints", c: "X.509 extension. Deprecated, use 2 5 29 31 instead", w: true },
    "2.5.29.26": {
        d: "issuingDistributionPoint",
        c: "X.509 extension. Deprecated, use 2 5 29 28 instead",
        w: true,
    },
    "2.5.29.27": { d: "deltaCRLIndicator", c: "X.509 extension", w: false },
    "2.5.29.28": { d: "issuingDistributionPoint", c: "X.509 extension", w: false },
    "2.5.29.29": { d: "certificateIssuer", c: "X.509 extension", w: false },
    "2.5.29.30": { d: "nameConstraints", c: "X.509 extension", w: false },
    "2.5.29.31": { d: "cRLDistributionPoints", c: "X.509 extension", w: false },
    "2.5.29.32": { d: "certificatePolicies", c: "X.509 extension", w: false },
    "2.5.29.32.0": { d: "anyPolicy", c: "X.509 certificate policy", w: false },
    "2.5.29.33": { d: "policyMappings", c: "X.509 extension", w: false },
    "2.5.29.34": { d: "policyConstraints", c: "X.509 extension. Deprecated, use 2 5 29 36 instead", w: true },
    "2.5.29.35": { d: "authorityKeyIdentifier", c: "X.509 extension", w: false },
    "2.5.29.36": { d: "policyConstraints", c: "X.509 extension", w: false },
    "2.5.29.37": { d: "extKeyUsage", c: "X.509 extension", w: false },
    "2.5.29.37.0": { d: "anyExtendedKeyUsage", c: "X.509 extended key usage", w: false },
    "2.5.29.38": { d: "authorityAttributeIdentifier", c: "X.509 extension", w: false },
    "2.5.29.39": { d: "roleSpecCertIdentifier", c: "X.509 extension", w: false },
    "2.5.29.40": { d: "cRLStreamIdentifier", c: "X.509 extension", w: false },
    "2.5.29.41": { d: "basicAttConstraints", c: "X.509 extension", w: false },
    "2.5.29.42": { d: "delegatedNameConstraints", c: "X.509 extension", w: false },
    "2.5.29.43": { d: "timeSpecification", c: "X.509 extension", w: false },
    "2.5.29.44": { d: "cRLScope", c: "X.509 extension", w: false },
    "2.5.29.45": { d: "statusReferrals", c: "X.509 extension", w: false },
    "2.5.29.46": { d: "freshestCRL", c: "X.509 extension", w: false },
    "2.5.29.47": { d: "orderedList", c: "X.509 extension", w: false },
    "2.5.29.48": { d: "attributeDescriptor", c: "X.509 extension", w: false },
    "2.5.29.49": { d: "userNotice", c: "X.509 extension", w: false },
    "2.5.29.50": { d: "sOAIdentifier", c: "X.509 extension", w: false },
    "2.5.29.51": { d: "baseUpdateTime", c: "X.509 extension", w: false },
    "2.5.29.52": { d: "acceptableCertPolicies", c: "X.509 extension", w: false },
    "2.5.29.53": { d: "deltaInfo", c: "X.509 extension", w: false },
    "2.5.29.54": { d: "inhibitAnyPolicy", c: "X.509 extension", w: false },
    "2.5.29.55": { d: "targetInformation", c: "X.509 extension", w: false },
    "2.5.29.56": { d: "noRevAvail", c: "X.509 extension", w: false },
    "2.5.29.57": { d: "acceptablePrivilegePolicies", c: "X.509 extension", w: false },
    "2.5.29.58": { d: "toBeRevoked", c: "X.509 extension", w: false },
    "2.5.29.59": { d: "revokedGroups", c: "X.509 extension", w: false },
    "2.5.29.60": { d: "expiredCertsOnCRL", c: "X.509 extension", w: false },
    "2.5.29.61": { d: "indirectIssuer", c: "X.509 extension", w: false },
    "2.5.29.62": { d: "noAssertion", c: "X.509 extension", w: false },
    "2.5.29.63": { d: "aAissuingDistributionPoint", c: "X.509 extension", w: false },
    "2.5.29.64": { d: "issuedOnBehalfOf", c: "X.509 extension", w: false },
    "2.5.29.65": { d: "singleUse", c: "X.509 extension", w: false },
    "2.5.29.66": { d: "groupAC", c: "X.509 extension", w: false },
    "2.5.29.67": { d: "allowedAttAss", c: "X.509 extension", w: false },
    "2.5.29.68": { d: "attributeMappings", c: "X.509 extension", w: false },
    "2.5.29.69": { d: "holderNameConstraints", c: "X.509 extension", w: false },

    // Netscape certificate type
    // An X.509 v3 certificate extension used to identify whether
    // the certificate subject is an SSL client, …
    "2.16.840.1.113730.1": { d: "certExtension", c: "Netscape" },
    "2.16.840.1.113730.1.1": { d: "netscapeCertType", c: "Netscape certificate extension" },
    "2.16.840.1.113730.1.2": { d: "netscapeBaseUrl", c: "Netscape certificate extension" },
    "2.16.840.1.113730.1.3": { d: "netscapeRevocationUrl", c: "Netscape certificate extension" },
    "2.16.840.1.113730.1.4": { d: "netscapeCaRevocationUrl", c: "Netscape certificate extension" },
    "2.16.840.1.113730.1.7": { d: "netscapeCertRenewalUrl", c: "Netscape certificate extension" },
    "2.16.840.1.113730.1.8": { d: "netscapeCaPolicyUrl", c: "Netscape certificate extension" },
    "2.16.840.1.113730.1.9": { d: "HomePageUrl", c: "Netscape certificate extension" },
    "2.16.840.1.113730.1.10": { d: "EntityLogo", c: "Netscape certificate extension" },
    "2.16.840.1.113730.1.11": { d: "UserPicture", c: "Netscape certificate extension" },
    "2.16.840.1.113730.1.12": { d: "netscapeSslServerName", c: "Netscape certificate extension" },
    "2.16.840.1.113730.1.13": { d: "netscapeComment", c: "Netscape certificate extension" },

    done: { d: "", c: "" },
};
