// embarrassingly bad tmp hack until I can get native solution 
// for tracking active route menu class naming

if (document.readyState === "complete") {

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (vw < 991)
        setTimeout(() => document.getElementById('navbarNav').className = "navbar-collapse collapse show", 0);

    if (location.hash == '#/create-account/')
        setTimeout(() => document.getElementById('menuCreateAccount').className = "nav-link active", 0);

    if (location.hash == '#/deposit/')
        setTimeout(() => document.getElementById('menuDeposit').className = "nav-link active", 0);

    if (location.hash == '#/withdraw/')
        setTimeout(() => document.getElementById('menuWithdraw').className = "nav-link active", 0);

    if (location.hash == '#/all-data/')
        setTimeout(() => document.getElementById('menuAllData').className = "nav-link active", 0);
}

const checkActive = (e) => {

    document.getElementById("menuCreateAccount").className = "nav-link";
    document.getElementById("menuDeposit").className = "nav-link";
    document.getElementById("menuWithdraw").className = "nav-link";
    document.getElementById("menuAllData").className = "nav-link";

    if (e.target.className == "img-navbar") return;
    (e.target.className == "nav-link") ? e.target.className = "nav-link active" : e.target.className = "nav-link";

};

// internal link styling hack, not for production!!!
const checkActive2 = (e) => document.getElementById(e).className = "nav-link active";