let REST = {
    get:function(url, callback){
        let success = true;
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log(this.status);
            if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
                success = true;
                const resObj = JSON.parse(this.responseText);
                console.log('resObj', resObj);
                if(callback != null){
                    return callback(success, resObj);
                }
            } else if(this.readyState == 4){
                console.log('>>',this.status);
                success = false;
                return callback(success, null);
            }
        };
        xhttp.open("GET", url, true);
        //xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8'); 환경에 맞게
        xhttp.setRequestHeader('Content-type', "application/json");       
        xhttp.send(); 
    },
    post:function(url, data, callback){
        let success = true;
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
                success = true;
                const resObj = JSON.parse(this.responseText);
                console.log('resObj', resObj);
                if(callback != null){
                    return callback(success, resObj);
                }
            }  else if(this.readyState == 4){
                success = false;
                return callback(success, null);
            }
        };
        xhttp.open("POST", url, true);
        //xhttp.setRequestHeader('Content-type', 'application/json'); 환경에 맞게
        xhttp.setRequestHeader('Content-type', "application/json");       
        xhttp.send(JSON.stringify(data)); 
    },
    put:function(url, data, callback){
        let success = true;
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
                success = true;
                const resObj = JSON.parse(this.responseText);
                console.log('resObj', resObj);
                if(callback != null){
                    return callback(success, resObj);
                }
            }  else if(this.readyState == 4){
                success = false;
                return callback(success);
            }
        };
        xhttp.open("PUT", url, true);
        xhttp.setRequestHeader('Content-type', "application/json");       
        xhttp.send(JSON.stringify(data)); 
    },
    patch:function(url, data, callback){
        let success = true;
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
                success = true;
                const resObj = JSON.parse(this.responseText);
                console.log('resObj', resObj);
                if(callback != null){
                    return callback(success, resObj);
                }
            }  else if(this.readyState == 4){
                success = false;
                return callback(success);
            }
        };
        xhttp.open("PATCH", url, true);
        xhttp.setRequestHeader('Content-type', "application/json");       
        xhttp.send(JSON.stringify(data)); 
    },
    delete:function(url, callback){
        let success = true;
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
                success = true;
                if(callback != null){
                    return callback(success);
                }
            }  else if(this.readyState == 4){
                success = false;
                return callback(success);
            }
        };
        xhttp.open("DELETE", url, true);
        xhttp.setRequestHeader('Content-type', "application/json");       
        xhttp.send(); 
    }
}
