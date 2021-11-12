function getInfo() {
    const browser = window.navigator.userAgent;
    const msgBox1 = document.querySelector("#msgBox1");
    msgBox1.innerHTML = `Your browser is: ${browser} (Using <span>window.navigator.userAgent</span>)`;
    console.log();
    const address = window.location.href;
    const msgBox2 = document.querySelector("#msgBox2");
    msgBox2.innerHTML = `The full url is: ${address} (Using <span>window.location.href</span> )`;
}

