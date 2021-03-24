const html = document.querySelector('#html');
const js = document.querySelector('#javascript');
const css = document.querySelector('#css');
const xml = document.querySelector('#xml');
const json = document.querySelector('#json');
const uname = document.querySelector('#uname');
const userLi = document.querySelector('#userLi');
const userdata = document.querySelector('#userdata');
const next = document.querySelector('#next');
let request = new XMLHttpRequest();
let request1 = new XMLHttpRequest();


html.addEventListener('click', () => {
    request.open("GET", "/iframe.html");
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            const state = request.readyState;
            const status = request.status;
            if (state === 4 && (status === 0 || (status >= 200 && status < 400))) {
                const scriptDOM = document.createElement('div');
                scriptDOM.innerHTML = request.response;
                document.body.appendChild(scriptDOM);
            } else {
                alert("加载失败");
            }
        }
    }
    request.send();
});

js.addEventListener('click', () => {
    request.open("GET", "/main1.js");
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            const stat = request.readyState;
            const status = request.status;
            if (stat === 4 && (status === 0 || (status >= 200 && status < 400))) {
                const scriptDOM = document.createElement('script');
                scriptDOM.innerText = request.response;
                document.body.appendChild(scriptDOM);
            } else {
                alert("加载失败");
            }
        }
    }
    request.send();
});

css.addEventListener('click', () => {
    request.open("GET", "/style.css");
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            const stat = request.readyState;
            const status = request.status;
            if (stat === 4 && (status === 0 || (status >= 200 && status < 400))) {
                const scriptDOM = document.createElement('style');
                scriptDOM.innerText = request.response;
                document.head.appendChild(scriptDOM);
            } else {
                alert("加载失败");
            }
        }
    };
    request.send();
});


xml.addEventListener('click', () => {
    request.open("GET", "/test.xml");
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            const stat = request.readyState;
            const status = request.status;
            if (stat === 4 && (status === 0 || (status >= 200 && status < 400))) {
                const content = request.responseXML.getElementsByTagName('warning')[0].textContent;
                const dom = document.createElement('div');
                dom.innerText = content;
                document.body.appendChild(dom);
            } else {
                alert("加载失败");
            }
        }
    };
    request.send();
});

json.addEventListener('click', () => {
    request.open("GET", "/test.json");
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {

            const state = request.readyState;
            const status = request.status;
            if (state === 4 && (status === 0 || (status >= 200 && status < 400))) {
                let user = JSON.parse(request.response);
                uname.textContent = user.name;
            } else {
                alert("加载失败");
            }
        }
    };
    request.send();
});

userLi.addEventListener("click", () => {
    request.open("GET", `/db1.json`)
    request.onreadystatechange = () => {
        const state = request.readyState;
        const status = request.status;
        if (state === XMLHttpRequest.DONE) {
            if (status === 0 || (status >= 200 && status < 400)) {
                let userArr = JSON.parse(request.response);
                userArr.forEach((node) => {
                    const li = document.createElement("li");
                    li.textContent = node.name + "-" + node.age + "-" + node.score;
                    userdata.appendChild(li);
                })
                page+=1;
            } else {
                alert("加载失败");
            }
        }
    };
    request.send();
});

let page = 1;
next.addEventListener('click',() => {
    request.open("GET", `/db${page}.json`)
    request.onreadystatechange = () => {
        const state = request.readyState;
        const status = request.status;
        if (state === XMLHttpRequest.DONE) {
            if (status === 0 || (status >= 200 && status < 400)) {
                let userArr = JSON.parse(request.response);
                userArr.forEach((node) => {
                    const li = document.createElement("li");
                    li.textContent = node.name + "-" + node.age + "-" + node.score;
                    userdata.appendChild(li);
                })
                page+=1;
            } else {
                alert("加载失败");
            }
        }
    };
    request.send();

    request1.open("GET", `/db${page+1}.json`)
    request1.onreadystatechange = () => {
        const state = request1.readyState;
        const status = request1.status;
        if (state === XMLHttpRequest.DONE) {
            if (status === 0 || (status >= 200 && status < 400)) {
            } else {
                next.disabled = true;
            }
        }
    };
    request1.send();
})





