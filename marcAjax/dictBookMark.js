
javascript:(
    void(
        function() {
            var fileRef;
            var loaded = false;

            try {
                loaded = lookupDistDefinition;
            }
            catch(err) {
            }

            if (!loaded) {
                fileRef = document.createElement('link');
                fileRef.rel = 'stylesheet';
                fileRef.type = 'text/css';
                fileRef.href = 'http://localhost:8080/CIS233Marc/marcAjax/css/dict.css';
                document.getElementsByTagName('head')[0].appendChild(fileRef);

                fileRef = document.createElement('script');
                fileRef.src = "http://localhost:8080/CIS233Marc/marcAjax/js/dict.js";
                fileRef.type = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(fileRef);
            } else {
                lookupDistDefinition();
            }
        }()
    )
);

