// eid-javascript-lib version 1.3

// Copyright (c) 2009 Johan De Schutter (eidjavascriptlib AT gmail DOT com), http://code.google.com/p/eid-javascript-lib/

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/*
	1.3 02/08/2009
	- Added DateFormatter.
	- If the third first name is detected while parsing the first names, it is saved in the firstName3 property.
	1.2 26/04/2009
	- Added Card object. This object is the base for EIDCard and SISCard.
	1.1 28/03/2009
	- Changed parsing of dates and social security number in SISCardBuilder35.
	- Getters of EIDCard and SISCard do not return Number- and Boolean objects anymore.
	  They will return primitive numbers and primitive booleans.
	1.0 24/03/2009
	- First release
*/

/*
 * Namespace be.belgium.eid
 */ 

/** 
 * @name be 
 * @namespace
 */
if (!window.be) window.be = new Object();
/** 
 * @name be.belgium
 * @namespace
 * @memberOf be
 */
if (!be.belgium) be.belgium = new Object();
/** 
 * @name be.belgium.eid 
 * @namespace
 * @memberOf be.belgium 
 */
 if (!be.belgium.eid) be.belgium.eid = new Object();
 
 /**
 * EIDCardBuilder259 extends CardBuilder.
 * EIDCardBuilder259, builds a EIDCard object step by step using data returned by the applet from eID middleware 2.5.9 or 2.6
 * <p>
 * Format of validity dates: YYYYMMDD (DD and MM can be empty strings, in this case DD = 01 and MM = 01 is presumed)<br>
 * Format of birth dates: YYYYMMDD (DD and MM can be empty strings, in this case DD = 01 and MM = 01 is presumed)
 * <p>
 * Formats of identity data on an eID card are described in the following documents:
 * @see Belgian eID Toolkit Developer's guide DeveloperGuide_tcm147-17218.pdf
 * @description
 * @constructor
 * @extends be.belgium.eid.CardBuilder
 */
be.belgium.eid.EIDCardBuilder259 = function() {
	this.card = new be.belgium.eid.EIDCard();
	this.birthDateFormatter = new be.belgium.eid.DateFormatter(be.belgium.eid.dateFormat.YYYYMMDD);
	this.validityDateFormatter = new be.belgium.eid.DateFormatter(be.belgium.eid.dateFormat.YYYYMMDD);
};
be.belgium.eid.EIDCardBuilder259.prototype = new be.belgium.eid.CardBuilder; // extends CardBuilder

/*
 * Setters 
 * @public All these methods are public
 */

be.belgium.eid.EIDCardBuilder259.prototype.setChipNumber = function(chipNumber) {
	try {
		this.card.setChipNumber(be.belgium.eid.JavaObjectConvertor.toString(chipNumber));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setIssMunicipality = function(issMunicipality) {
	try {
		this.card.setIssuingMunicipality(be.belgium.eid.JavaObjectConvertor.toString(issMunicipality));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setNationalNumber = function(nationalNumber) {
	try {
		this.card.setNationalNumber(be.belgium.eid.JavaObjectConvertor.toNumber(nationalNumber));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setName = function(name) {
	try {
		this.card.setSurname(be.belgium.eid.JavaObjectConvertor.toString(name));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setFirstName1 = function(firstName1) {
	try {
		this.card.setFirstName1(be.belgium.eid.JavaObjectConvertor.toString(firstName1));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setFirstName2 = function(firstName2) {
	try {
		this.card.setFirstName2(be.belgium.eid.JavaObjectConvertor.toString(firstName2));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setFirstName3 = function(firstName3) {
	try {
		this.card.setFirstName3(be.belgium.eid.JavaObjectConvertor.toString(firstName3));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setNationality = function(nationality) {
	try {
		this.card.setNationality(be.belgium.eid.JavaObjectConvertor.toString(nationality));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setBirthLocation = function(birthLocation) {
	try {
		this.card.setBirthLocation(be.belgium.eid.JavaObjectConvertor.toString(birthLocation));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setSex = function(sex) {
	try {
		this.card.setSex(be.belgium.eid.GenderParser.parse(be.belgium.eid.JavaObjectConvertor.toString(sex)));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setNobleCondition = function(nobleCondition) {
	try {
		this.card.setNobleCondition(be.belgium.eid.JavaObjectConvertor.toString(nobleCondition));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setDocumentType = function(documentType) {
	try {
		documentType = be.belgium.eid.JavaObjectConvertor.toNumber(documentType);
		this.card.setDocumentType(documentType);
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setWhiteCane = function(whitecane) {
	try {
		if (whitecane) {
			if (this.card.getExtendedMinority()) {
				this.card.setSpecialStatus(be.belgium.eid.specialStatus.WHITE_CANE_AND_EXTENDED_MINORITY);
			} else {
				this.card.setSpecialStatus(be.belgium.eid.specialStatus.WHITE_CANE);
			}
		}
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setYellowCane = function(yellowcane) {
	try {
		if (yellowcane) {
			if (this.card.getExtendedMinority()) {
				this.card.setSpecialStatus(be.belgium.eid.specialStatus.YELLOW_CANE_AND_EXTENDED_MINORITY);
			} else {
				this.card.setSpecialStatus(be.belgium.eid.specialStatus.YELLOW_CANE);
			}
		}
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setExtendedMinority = function(extendedMinority) {
	try {
		if (extendedMinority) {
			if (this.card.getWhiteCane()) {
				this.card.setSpecialStatus(be.belgium.eid.specialStatus.WHITE_CANE_AND_EXTENDED_MINORITY);
			} else if (this.card.getYellowCane()) {
				this.card.setSpecialStatus(be.belgium.eid.specialStatus.YELLOW_CANE_AND_EXTENDED_MINORITY);
			} else {
				this.card.setSpecialStatus(be.belgium.eid.specialStatus.EXTENDED_MINORITY);
			}
		}
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setStreet = function(street) {
	try {
		this.card.setStreet(be.belgium.eid.JavaObjectConvertor.toString(street));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setStreetNumber = function(streetNumber) {
	try {
		this.card.setStreetNumber(be.belgium.eid.JavaObjectConvertor.toString(streetNumber));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setBoxNumber = function(boxNumber) {
	try {
		this.card.setBoxNumber(be.belgium.eid.JavaObjectConvertor.toString(boxNumber));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setZip = function(zip) {
	try {
		this.card.setZipCode(be.belgium.eid.JavaObjectConvertor.toNumber(zip));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setMunicipality = function(municipality) {
	try {
		this.card.setMunicipality(be.belgium.eid.JavaObjectConvertor.toString(municipality));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setCountry = function(country) {
	try {
		this.card.setCountry(be.belgium.eid.JavaObjectConvertor.toString(country));
	} catch (e){}
};

be.belgium.eid.EIDCardBuilder259.prototype.setPicture = function(pictureByteArray) {
	try {
		this.card.setPicture(pictureByteArray);
	} catch (e){}
};
/**
 * CardReader259, object that uses the applet from eID middleware 2.5.9/2.6 to read eID-cards.
 * @description
 * @constructor
 * @param {primitive string|String} [readerName=""] Name of reader which is used to read eID-cards (optional). 
 */
be.belgium.eid.CardReader259 = function(readerName) {
	this.readerName = "";
	this.setReaderName(readerName);
	this.appletId = "BEIDApplet";
	this.noCardPresentHandler = null;
	this.noReaderDetectedHandler = null;
	this.BEIDApplet = null;
};

/**
 * Return BEID applet.
 * @public
 * @method getBEIDApplet
 * @throws NullPointerException if no BEID applet is found.
 * @return BEID applet.
 * @type Object
 */
be.belgium.eid.CardReader259.prototype.getBEIDApplet = function() {
	if (!this.BEIDApplet) {
		this.BEIDApplet = document.getElementById(this.appletId);
		if (!this.BEIDApplet)
			throw new be.belgium.eid.NullPointerException();
	}
	return this.BEIDApplet;
};

/**
 * Set name of reader which is used to read eID-cards.
 * @public
 * @method setReaderName
 * @param {primitive string|String} readerName
 */
be.belgium.eid.CardReader259.prototype.setReaderName = function(readerName) {
	if (readerName === null || typeof(readerName) == "undefined")
		this.readerName = "";
	else if (readerName instanceof String)
		this.readerName = readerName.valueOf();
	else
		this.readerName = readerName;
};

/**
 * Return name of reader which is used to read eID-cards.
 * @public
 * @method getReaderName
 * @return reader name
 * @type primitive string
 */
be.belgium.eid.CardReader259.prototype.getReaderName = function() {
	return this.readerName;
};

/**
 * Set id of the applet.
 * @public
 * @method setAppletId
 * @param {primitive string} appletId
 */
be.belgium.eid.CardReader259.prototype.setAppletId = function(appletId) {
	this.appletId = appletId;
	this.BEIDApplet = null;
};

/**
 * Return id of the applet.
 * @public
 * @method getAppletId
 * @return id of the applet
 * @type primitive string
 */
be.belgium.eid.CardReader259.prototype.getAppletId = function() {
	return this.appletId;
};

/**
 * Set handler function that is called when no card is present.
 * @public
 * @method setNoCardPresentHandler 
 * @param {function|Function Object} handler reference to a function or a Function object.
 */
be.belgium.eid.CardReader259.prototype.setNoCardPresentHandler = function(handler) {
	if (handler !== null && typeof(handler) != "undefined" && (typeof(handler) == "function" || handler instanceof Function))
		this.noCardPresentHandler = handler;
	else
		this.noCardPresentHandler = null;
};

/**
 * Set handler function that is called when no reader is detected.
 * @public
 * @method setNoReaderDetectedHandler
 * @param {function|Function Object} handler reference to a function or a Function object.
 */
be.belgium.eid.CardReader259.prototype.setNoReaderDetectedHandler = function(handler) {
	if (handler !== null && typeof(handler) != "undefined" && (typeof(handler) == "function" || handler instanceof Function))
		this.noReaderDetectedHandler = handler;
	else
		this.noReaderDetectedHandler = null;
};

/**
 * Read eID card
 * @public
 * @method read
 * @return a EIDCard object or null if no card is present or there was a failure to read the card.
 * @type EIDCard,null
 */
be.belgium.eid.CardReader259.prototype.read = function() {
	var card = null;
	var cardBuilder = null;

	try {
		var errorCode = 0;
		
		if (this.readerName === "") {
			var parameterReaderName = "" + this.getBEIDApplet().getParameter("Reader");
			if (parameterReaderName !== null && parameterReaderName !== "") {
				this.readerName = parameterReaderName;
			}
		}

		// Reset all objects and previous read card values
		if (this.readerName !== "") {
			errorCode = this.getBEIDApplet().InitLib(this.readerName);
		} else {
			errorCode = this.getBEIDApplet().InitLib("");
		}

		if (errorCode == 0) {
			if (be.belgium.eid.CardReader.validChipNumber(this.BEIDApplet.getChipNumber())) {
				cardBuilder = new be.belgium.eid.EIDCardBuilder259();
				cardBuilder.setCardNumber(this.BEIDApplet.getCardNumber());
				cardBuilder.setChipNumber(this.BEIDApplet.getChipNumber());
				cardBuilder.setValidityDateBegin(this.BEIDApplet.getValidityDateBegin());
				cardBuilder.setValidityDateEnd(this.BEIDApplet.getValidityDateEnd());
				cardBuilder.setIssMunicipality(this.BEIDApplet.getIssMunicipality());
				cardBuilder.setNationalNumber(this.BEIDApplet.getNationalNumber());
				cardBuilder.setName(this.BEIDApplet.getName());
				cardBuilder.setFirstName1(this.BEIDApplet.getFirstName1());
				cardBuilder.setFirstName2(this.BEIDApplet.getFirstName2());
				cardBuilder.setFirstName3(this.BEIDApplet.getFirstName3());
				cardBuilder.setNationality(this.BEIDApplet.getNationality());
				cardBuilder.setBirthLocation(this.BEIDApplet.getBirthLocation());
				cardBuilder.setBirthDate(this.BEIDApplet.getBirthDate());
				cardBuilder.setSex(this.BEIDApplet.getSex());
				cardBuilder.setNobleCondition(this.BEIDApplet.getNobleCondition());
				cardBuilder.setDocumentType(this.BEIDApplet.getDocumentType());
				cardBuilder.setWhiteCane(this.BEIDApplet.getWhiteCane());
				cardBuilder.setYellowCane(this.BEIDApplet.getYellowCane());
				cardBuilder.setExtendedMinority(this.BEIDApplet.getExtendedMinority());
				cardBuilder.setStreet(this.BEIDApplet.getStreet());
				cardBuilder.setStreetNumber(this.BEIDApplet.getStreetNumber());
				cardBuilder.setBoxNumber(this.BEIDApplet.getBoxNumber());
				cardBuilder.setZip(this.BEIDApplet.getZip());
				cardBuilder.setMunicipality(this.BEIDApplet.getMunicipality());
				cardBuilder.setCountry(this.BEIDApplet.getCountry());
				cardBuilder.setPicture(this.BEIDApplet.GetPicture());

				card = cardBuilder.getCard();
			}
		} else {
			if (errorCode == 2) {
				if (this.noCardPresentHandler) {
					this.noCardPresentHandler();
				} else {
					window.alert("BEID Applet returned errorcode: " + errorCode);
				}
			} else {
				window.alert("BEID Applet returned errorcode: " + errorCode);
			}
		}
	} catch (e) {
		if (e instanceof be.belgium.eid.NullPointerException) {
			window.alert("BEID Applet not found.");
		} else {
			window.alert("BEID Applet throw exception: " + e);
		}
	}

	try {
		this.getBEIDApplet().ExitLib();
	} catch (e){}

	return card;
};