Library of Javascript objects designed to retrieve data out of eID- and SIS cards using the applet from the eID middleware.

The interface and implementation (identity data) of EIDCard and SISCard are designed to be eID middleware independent.
The interface and implementation of EIDCardBuilder35 and SISCardBuilder35 are designed for eID middleware 3.5. 
The interface of CardReader is designed to be middleware independent.
The implementation of CardReader uses EIDCardBuilder35- and SISCardBuilder35 objects and so it is designed for eID middleware 3.5.

If a new EID middleware is released, only new EIDCardBuilder- and SISCardBuilder objects should be created and 
only small changes will need to be applied to the implementation of the CardReader.

The interface of CardReader, EIDCard and SISCard will not change.
Therefore code that uses the CardReader-, EIDCard- and SISCard-objects will not have to be changed if a new eID middleware is released.
 
The library is supposed to work on Windows in Internet Explorer 5.5 and higher, in Mozilla Firefox 2 and higher, and in Opera 9 and higher.
Other browsers and other platforms were not tested.

SIS cards can only be read when using a SIS card plugin. A SIS card plugin for the ACS ACR38U reader is available in the eID Quick Install.
More information about SIS card plugins in the eID V3 middleware can be found at: http://eid.belgium.be/nl/binaries/eid3_siscardplugins_tcm147-22479.pdf
 
@version 1.0 24/03/2009
@author Johan De Schutter (eidjavascriptlib AT gmail DOT com), http://code.google.com/p/eid-javascript-lib/