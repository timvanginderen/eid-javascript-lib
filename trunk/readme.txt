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
 
@version 1.3 18/07/2009
@author Johan De Schutter (eidjavascriptlib AT gmail DOT com), http://code.google.com/p/eid-javascript-lib/


How to run the examples
-----------------------

1) Download the archive eidjavascriptlib.zip from http://code.google.com/p/eid-javascript-lib/
   
   - The archive contains the following subdirectories: examples, jsdoc and src.
   - Unzip the archive in a directory, for example c:\eid-javascript-lib

2) Install eID software with the eID Quick install. Instructions can be found at
   http://eid.belgium.be/nl/Hoe_installeer_je_de_eID/Quick_Install/
   http://eid.belgium.be/fr/Comment_installer_l_eID/Quick_Install/

3) Download Belgium Identity Card Developer's Kit (eID SDK 3.5) from 
   http://eid.belgium.be/nl/Achtergrondinfo/De_eID_technisch/index.jsp
   http://eid.belgium.be/fr/Informations_legales_et_techniques/L_eID_d_un_point_de_vue_technique/index.jsp
   
   - Unzip the archive
   - Run the installer from the archive
   - Select the Common and JAVA feature to be installed.
   - Go to the installation directory of the eID SDK (probably C:\Documents and Settings\<user>\My Documents\Belgium Identity Card SDK)
   - Go to the subdirectory \beidlib\Java\bin of the installation directory.
   - Copy the following files to the examples subdirectory of the eid-javascript-lib:
         - Applet-Launcher License.rtf
         - applet-launcher.jar
         - beid35JavaWrapper-linux.jar
         - beid35JavaWrapper-mac.jar
         - beid35JavaWrapper-win.jar
         - beid35libJava.jar
         - beid.jnlp
         - BEID_Applet.jar

4) Open the copied beid.jnlp in notepad (or any other text editor)
   The codebase directory should be changed to the examples subdirectory of the eid-javascript-lib:
   
   If your examples subdirectory is C:\eid-javascript-lib\examples\

   change 
	<jnlp codebase="http://127.0.0.1/" href="beid.jnlp"> 
   into 
	<jnlp codebase="file:///C:/eid-javascript-lib/examples/" href="beid.jnlp">

   This is also explained in readme.txt and copy_binaries.bat in the Samples\misc\Applet\Basic\java subdirectory of the eID SDK.

5) Open the examples in a browser.


Remark
------
The base64 encoding only works in Internet Explorer, if JRE 6 Update 10 (Java Runtime Environment 1.6.0_10) or higher is installed
and if the Next-Generation Java Plug-in is enabled (this is the default setting) in the Java Control Panel.