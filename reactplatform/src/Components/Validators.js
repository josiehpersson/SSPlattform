//SUPERKLASS

class _SSValidator {
  constructor() {
    this.isvalid = false;
  }
  get valid() {
    return this.isvalid;
  }
  get invalid() {
    return !this.isvalid;
  }
  validate(text) {
    this.isvalid = false;
  }
}

//BASKLASS

export class SSTextValidator extends _SSValidator {
  constructor(minlen, maxlen) {
    super();
    this.minlen = minlen;
    this.maxlen = maxlen;
  }
  validate(text) {
    this.isvalid = text.length >= this.minlen && text.length <= this.maxlen;
  }
}

//SPECKLASSER

//MAILVALIDATOR

export class SSMailValidator extends SSTextValidator {
  constructor() {
    super(6, 64);
  }
  validate(text) {
    super.validate(text);
    this.isvalid = super.valid && isValidMail(text);
  }
}

//STÖDFUNK. till MAILVALIDATOR

function isValidMail(text) {
  return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(text);
}

//PASSWORDVALIDATOR

export class SSPasswordValidator extends SSTextValidator {
  constructor() {
    super(6, 24);
  }
  validate(text) {
    super.validate(text);
    this.isvalid = super.valid && isValidPassword(text);
  }
}

//STÖDFUNK. till PASSWORDVALIDATOR
// måste innehålla minst ett nummer, en stor bokstav, en liten bokstav och 6 eller fler karaktärer

function isValidPassword(text) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(text);
}

//NAMNVALIDATOR

export class SSNameValidator extends SSTextValidator {
  constructor() {
    super(2, 30);
  }
  validate(text) {
    const trimmedText = text.trim();
    super.validate(trimmedText);
    this.isvalid = super.valid && isValidName(trimmedText);
  }
}

//STÖDFUNK. till NAMNVALIDATOR
function isValidName(text) {
  return /^[a-zA-ZåäöÅÄÖ '-]+$/.test(text);
}

//MOBILNR.VALIDATOR
export class SSPhoneValidator extends SSTextValidator {
  constructor() {
    super(11, 11);
  }
  validate(text) {
    super.validate(text);
    this.isvalid = super.valid && isValidPhone(text);
  }
}

//STÖDFUNK. till MOBILNR.VALIDATOR
//format : xxx-xxxxxxx
function isValidPhone(text) {
   /^[0-9]{3}\-[0-9]{7}$/.test(text);
}

//PERSONNR.VALIDATOR

export class SSPNumberValidator extends SSTextValidator {
  constructor() {
    super(11, 11);
  }
  validate(text) {
    super.validate(text);
    this.isvalid = super.valid && isValidPNumber(text);
  }
}

//STÖDFUNK. till PERSONNR.VALIDATOR
//format: xxxxxx-xxxx
function isValidPNumber(text) {
  return /^[0-9]{6}\-[0-9]{4}$/.test(text);
}

//KOMBINERA VALIDATORER
export class SSCombinedValidator {
  constructor(...validators) {
    this.items = validators;
  }
  get valid() {
    let validitems = this.items.filter((i) => {
      return i.valid;
    });
    return validitems.length === this.items.length;
  }
  get invalid() {
    return !this.valid;
  }
}
