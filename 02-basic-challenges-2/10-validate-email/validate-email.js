function validateEmail(email) {
  if (email.indexOf('@')===-1) {
    return false;
  }

  const [localPart, domain]=email.split('@');
  if (localPart.length===0 || domain<3) {
    return false;
  }
  const domainExtention=domain.split('.');
  console.log(domainExtention);
  
  if (domainExtention.length<2 ||
  domainExtention[domainExtention.length-1].length<2) {
    return false;
  }

  return true;
}
console.log(validateEmail('jane.doe@domain.org'));

module.exports = validateEmail;
