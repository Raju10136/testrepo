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


// aa code 
  <meta http-equiv="Content-Security-Policy" content="
  script-src 'self'   https://www.googletagmanager.com/gtm.js https://www.google.com/recaptcha/api.js https://www.googletagmanager.com/gtag/js https://www.facebook.com/tr 'nonce-random-csp-nonce' 'report-sample'; 
  style-src 'self' https://fonts.googleapis.com/css https://fonts.googleapis.com/ 'nonce-random-csp-nonce'  'report-sample';
  font-src 'self' https://fonts.gstatic.com/ https://fonts.gstatic.com/s/roboto https://fonts.googleapis.com/css https://form.jotform.com/  'report-sample' ;
  img-src 'self' https://www.google.co.in/ads/ga-audiences data: https://www.google-analytics.com/collect https://www.facebook.com/tr https://px.ads.linkedin.com/collect/ https://www.google.co.jp/ads/ga-audiences 'nonce-random-csp-nonce';
  object-src 'none';
  connect-src 'self' http://192.168.8.230:1099/pmsdob_api/v1/process https://stats.g.doubleclick.net/j/collect https://www.google-analytics.com/j/collect https://www.google-analytics.com/g/ https://analytics.google.com/g/ https://jsonip.com/;  
  form-action 'self';
  base-uri 'self';
  frame-src 'self' https://www.google.com/ https://form.jotform.com/ 'nonce-random-csp-nonce' ;
   ">

// cams online
  <meta http-equiv="Content-Security-Policy" content="
  script-src 'self' https://www.gstatic.com/ https://www.google-analytics.com/ https://connect.facebook.net/signals/config/664413423741255 https://connect.facebook.net/signals/config https://connect.facebook.net/en_US/fbevents.js https://www.googletagmanager.com/gtm.js https://www.googletagmanager.com/gtag/js http://mozilla.github.io/pdf.js/build/pdf.js https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js https://cx.camsonline.com/Camserv-Plugin/UF-Webchat.js https://www.google.com/recaptcha/api.js https://www.gstatic.com/recaptcha/releases/x19joXI_IeQnFJ7YnfDapSZq/recaptcha__en.js 'nonce-cmFuZG9tLWNzcC1ub25jZQ==' 'report-sample'; 
  style-src 'self' https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css https://fonts.googleapis.com/css2 'nonce-cmFuZG9tLWNzcC1ub25jZQ=='  'report-sample';
  font-src 'self' https://fonts.gstatic.com/s/ https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/ 'nonce-cmFuZG9tLWNzcC1ub25jZQ==' ;
  img-src 'self' https://cx.camsonline.com https://www.camsonline.com http://192.168.3.61 http://192.168.3.61:9190/assets/images/Technovity_award_for_CAMSfinserv.svg http://192.168.3.61:9190/assets/images/Navi_MF_news.svg http://192.168.3.61:9190/assets/images/BitSight_cyber_security.svg 
  http://192.168.3.61:9191/cams/documents/cams_updates/Unclaimed_money_Mint.svg http://192.168.3.61:9191/cams/documents/cams_updates/AI_FinTech_100.svg http://192.168.3.61:9191/cams/documents/cams_updates/Online_KYC_modification2.svg 
  http://192.168.3.61:9191/cams/documents/cams_updates/Asset_7.svg http://192.168.3.61:9190/assets/images/CFO_of_the_year%20award.svg http://192.168.3.61:9190/assets/images/BitSight_cyber_security.svg http://192.168.3.61:9191/cams/documents/cams_updates/Asset_7.svg  https://www.google.co.in/ads ;
  object-src 'none';
  connect-src 'self' http://192.168.3.61:9190/cams_api/v1/camsonline https://analytics.google.com/g/collect https://www.google-analytics.com/g/collect https://www.google-analytics.com/j/collect https://stats.g.doubleclick.net/j/collect https://connect.facebook.net/en_US/fbevents.js https://adservice.google.com/pagead/regclk;   
  form-action 'self';
  base-uri 'self';
  frame-src 'self' https://www.google.com/ https://cx.camsonline.com/ 'nonce-cmFuZG9tLWNzcC1ub25jZQ==' ;
   ">

   // edge 360
    <meta http-equiv="Content-Security-Policy" content="
  script-src 'self' https://www.gstatic.com/recaptcha https://connect.facebook.net/signals/config/664413423741255 https://connect.facebook.net/signals/config https://connect.facebook.net/en_US/fbevents.js https://www.googletagmanager.com/gtm.js https://www.googletagmanager.com/gtag/js http://mozilla.github.io/pdf.js/build/pdf.js https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js https://cx.camsonline.com/Camserv-Plugin/UF-Webchat.js https://www.google.com/recaptcha/api.js https://www.gstatic.com/recaptcha/releases/x19joXI_IeQnFJ7YnfDapSZq/recaptcha__en.js 'nonce-cmFuZG9tLWNzcC1ub25jZQ==' 'report-sample'; 
  style-src 'self' 'nonce-cmFuZG9tLWNzcC1ub25jZQ==' https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css https://fonts.googleapis.com/css2   'report-sample';
  font-src 'self' https://fonts.gstatic.com/s/ https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/ ;
  img-src 'self' https://cx.camsonline.com https://www.camsonline.com http://192.168.3.61 http://192.168.3.61:9190/assets/images/Technovity_award_for_CAMSfinserv.svg http://192.168.3.61:9190/assets/images/Navi_MF_news.svg http://192.168.3.61:9190/assets/images/BitSight_cyber_security.svg 
  http://192.168.3.61:9191/cams/documents/cams_updates/Unclaimed_money_Mint.svg http://192.168.3.61:9191/cams/documents/cams_updates/AI_FinTech_100.svg http://192.168.3.61:9191/cams/documents/cams_updates/Online_KYC_modification2.svg 
  http://192.168.3.61:9191/cams/documents/cams_updates/Asset_7.svg http://192.168.3.61:9190/assets/images/CFO_of_the_year%20award.svg http://192.168.3.61:9190/assets/images/BitSight_cyber_security.svg http://192.168.3.61:9191/cams/documents/cams_updates/Asset_7.svg  https://www.google.co.in/ads ;
  object-src 'self';
  connect-src 'self' https://edge360uat.camsonline.com/wrapapi/v1/clientonboarding https://analytics.google.com/g/collect https://www.google-analytics.com/g/collect https://www.google-analytics.com/j/collect https://stats.g.doubleclick.net/j/collect https://connect.facebook.net/en_US/fbevents.js https://adservice.google.com/pagead/regclk;   
  form-action 'self';
  base-uri 'self';
  frame-src 'self' https://www.google.com/ https://cx.camsonline.com/ 'nonce-cmFuZG9tLWNzcC1ub25jZQ==' ;
   ">

// welthserv
  <meta http-equiv="Content-Security-Policy" content="
  script-src 'self'   https://www.googletagmanager.com/gtm.js https://www.google.com/recaptcha/api.js 'nonce-random-csp-nonce' 'report-sample'; 
  style-src 'self' 'nonce-random-csp-nonce'  'report-sample';
  font-src 'self' ;
  img-src 'self' data: https://www.google-analytics.com/collect 'nonce-random-csp-nonce';
  object-src 'self';
  connect-src 'self' http://192.168.8.230:1099/pmsdob_api/v1/process https://www.google-analytics.com/j/collect https://www.google-analytics.com/g/;  
  form-action 'self';
  base-uri 'self';
  frame-src 'self' https://www.google.com/ 'nonce-random-csp-nonce' ;
   ">

   // recon
     <meta http-equiv="Content-Security-Policy" content="
  script-src 'self' 'nonce-random-csp-nonce';
  style-src 'self' 'nonce-random-csp-nonce' https://fonts.googleapis.com  'report-sample';
  font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com 'nonce-random-csp-nonce' ;
  img-src 'self';
  object-src 'none';
  connect-src 'self' http://192.168.3.61:9086/rocapi/v1/trxn; 
  form-action 'self';
  base-uri 'self';
  frame-src 'self';
  report-uri  http://192.168.3.61:9086/rocapi/v1/trxn;
  ">


RrvZiJuoiT0ip3q9Spd2JhbdDMLlShOnm6byPOdQIuMFnw95EANb6zV_mO5kSrOYbUeoY7aLFaVxH6QqI6FL2rgy3VLwd1drwpbsAY1_mjJDnqjIYNmOqpZxks6MxMUVSc5O2b-FCNNQjkkLrgaVr_c3-p73ZgD7Sml7DYb241w-fwWw4kgGJv4bZnOKJufJJRnUvAyFejpUetTDqvuWCns5a6uk_pEUFsXk-R8RIeYynsQU9erfy8cOdnQqZmNU0DwA4fXi3Ei4SYfc0Fxs1m_xD7-43S4AdzQUizgGT4xOAnyeNUFe_siNUq3uL5kx6fLFfr4GXTVCsR1thim_fJJTjtoBmQ3IFagDwiyZYLETEn-jvb-fzo2mYWxwNHpD1s4takcVe4c4PAu47Xg_-SkrO-RKQIvRObW2vyc7tyP3SETb0PoDOezCI4b2gnlBRpDYXUoP--tXR5e6bSxwcWPPzj4Kmlt1JLGPVUvVDfR1VGZxh2dIQbPMW04sQ7MnVxS-w1JNUzZSXnqWge_cCgb3ewExvGyd5EAk1K-TZwdGFuCPaqBlhFuD3ISYXidwTlyDN4G9gC0MgjolQyLL6W8oe84resgGFTU4CArFQOKIwLH_1tR99TL2l4L3Rq96QRZ-wTbRWGUgpiUgpalcv6ZNXYpmqpIL-poOG-qrZY1QKxeRN087NSWlfTriMdi-9ba4toEmdMCLZ84RcUh8KmgF8GuvdcYbpFw1tgg7DbpJDxRloQwPlMY7rNeWfI2FWQltsPDywgYo0AF8abFHyI1ZwY8bYK-WXicYiA-jnih0jO_8J-eX1Rd5i-_ZmAtg5ZSstoFF2yl61vjHwrx6OEd4fu4kma_JC65AB_kKe8UjLk4PiruATrLoKb03QzWd20rNXZ3wxI74HsVLsuFZ8dw0KyBh6rg_U9UsLBHQJXiZiaWZLRueAkLgqv5nUj5Qj7B56v3PlXMdbbFmVH5qJUypXs5aDyUgV-K3EDInMbc6JfyfMBcLaCx0J0NymKNETMkT2LpHal-UJrQ0VYnimOzezePrvpGFNoC6cGE-83xvet47vNCnM1Fci4kFbsj-pKaLtz1IEPERxLdW05AVIXImwo_hsmlD2e0K4KsN8OAT2jwxrk4Y0jw0t-HesAqkdj3GN6bT0WlthuSgf9YWmk9Xy9FW2SEV4sxt07FetC3JaIyWZ5B8KYxVydH2c3neR646m09dIHUtwMT7gTHs3JRu1v2uAufkQEjgHdnwS2IYVg4tcn5oN0Ta4Kdn6Hg5gRNPMzouCkvxC6Bi_X6mCZsqprRGDzAxtJHBvypwSLdrfIG5QqrCmHOjWWLa8YCu4NjPmWMXYATiqUqGPYG6-rvkPC5oFyho02_wvlYva5ATNx9uC8bQHTMw4gw4HIPhLgUpYB-3Y8ezYTCvxb-AdwjKHyePhGtCgvkOiOI0eMCY_vIgQZhZMZm7LPTt7MG_jLJS0CO3mBI8aemOMdjrc6a4RNQohJf3rjQq6iYvOqK_Nvr0mOsVO5gtkTes96X7hywHpTadOf1uNh9fJm3DiEIZd6em17_0o8Ckd5bX2fBxm8cyemhePfebCkuEBEiMocHPpmYfX2z60oSC_qyuEc0ByNMEyojyKt_Cqq1IE8ECsxxYU0hglwe9CxVRwTYWF_0qROO79nolCMZZAdJTtSayztByOc-K2VUjKZ5no35qilHnKth1gejRtHa12MW_imEpv85l0xvSKEnMeB_AYTGdK8oRPUvDDE0ngjQYF-VJiuoy12om9c1KpdtX53cBVNmrzSHpY5OPp007-lYMb99Am8bZi0qX5-2JpFjbizgKoRd7EnnMvRCV7HnAHNiI3VyoZgh3PmwNJmF_fpDzf1vpdv3XQO86DgXfADpbpDW4dTkxIqf0Ar5vdOe3HIalXnwvcSars2JE8Vt8TTE5ySchExyyq7leV-BvQcMkWQ5WAPZDSBZBwdpRCZRSEGptYCRmVq9v-xGqfdTu0HyX_sfFb5C07a7lvqyTURQ-YBd7nvF9SY2gdAhsxXYimCLrzGQcg8-o5qQDabn8xr3PP4sohPx1C9HemhG5R6gzgqaobS2tNQepthdo-86eu4wm4GjZqNYB02t6wpLXKjebrdp2M93xOewWnGjSo3Rhqz8C-kqFiqqGBnp73pXa8gNaaCJldcPxKk3_t99ZbBm8aQ5ZSzhnxk_bZ0RPvNtylLC5G6KllHlK8ufLo0XzwjbrCejqacGNGgPfb_1wtmpcYSBEmGE6HOKB-IQZr4rWcEo0ZdUS4fTnk5D-HyRlSbSbypw5jC8VZP_UBg2Nz84t8TkHgYQO3SLtWVBdxDu_nPWZSeVaDpzwTEqBS5BomkjWl_5AKy-eQcYh5SG7JKcgI9Kqe401W9DLEpQY4cdLV4paM-P22UwY20FkvCWam5b357zT_Ax_mqS778ApND5Qe03fYi51cyYTauY1CA5IgxGA_wSgNdOQHq8Kl6vCwXd8

6LcArboZAAAAAAtiHARehV90bJAug3151w_ENjjH
