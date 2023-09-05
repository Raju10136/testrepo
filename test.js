// Parse the HTML content
const document = parse5.parse(htmlContent);

// Recursive function to find elements with two class attributes
function findElementsWithTwoClasses(node) {
    if (node.attrs) {
        const classAttribute = node.attrs.find(attr => attr.name === 'class');

        if (classAttribute && classAttribute.value.split(' ').length === 2) {
            const serializedNode = parse5.serialize(node);
            console.log(`Element with two classes: ${serializedNode}`);
        }
    }

    if (node.childNodes) {
        for (const childNode of node.childNodes) {
            findElementsWithTwoClasses(childNode);
        }
    }
}


server {
        listen 443 ssl;      
        server_name  softdigisolutions.com www.softdigisolutions.com;
        ssl_certificate /home/raju/cert/ssl.crt;
        ssl_certificate_key /home/raju/cert/ssl.key;

        # SSL settings
       ssl_protocols TLSv1.2 TLSv1.3;
       #ssl_ciphers 'TLS_AES_128_GCM_SHA256';
       ssl_prefer_server_ciphers off;

      # Other SSL-related settings
       ssl_session_timeout 1d;
       ssl_session_cache shared:SSL:50m;
       ssl_session_tickets off;
       add_header Content-Security-Policy "default-src 'self'; style-src   'self' https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css 'unsafe-inline'  'report-sample';  script-src 'nonce-$request_id' 'self' 'report-sample'; object-src 'none'; form-action 'self';base-uri 'self';report-to my-report-group; font-src 'self' https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/fonts/fontawesome-webfont.woff https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0 ;";    
		location / {
            proxy_pass http://localhost:8080; # Replace with your Node.js app address
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
			
			sub_filter_once off;
            sub_filter 'random-csp-nonce' $request_id;
            #sub_filter_types text/html;
			
        }
#        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
#        include /etc/nginx/default.d/*.conf;

        error_page 404 /404.html;
        location = /404.html {
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        }
    }



    
