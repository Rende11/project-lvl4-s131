import SHA256 from 'crypto-js/sha256';

export default password => SHA256(password).toString();
