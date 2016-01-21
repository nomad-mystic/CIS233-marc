/**
 * Created by Nomad_Mystic on 1/11/2016.
 */


javascript:(
    void(
        function() {
            var fileRef;
            var loaded = false;

            try {
                loaded = checkDocumentWCAG;
            }
            catch(err) {
            }

            if (!loaded) {
                fileRef = document.createElement('link');
                fileRef.rel = 'stylesheet';
                fileRef.type = 'text/css';
                fileRef.href = 'http://localhost:8080/CIS233Marc/accessibilityCalculator/wcag.css';
                document.getElementsByTagName('head')[0].appendChild(fileRef);

                fileRef = document.createElement('script');
                fileRef.src = "http://localhost:8080/CIS233Marc/accessibilityCalculator/wcag.js";
                fileRef.type = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(fileRef);
            } else {
                checkDocumentWCAG();
            }
        }()
    )
);

