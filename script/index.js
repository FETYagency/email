const INPUT_ELEMENT = document.querySelector("[type='email']")
const regex = /^\w+@[\D]+\.[\D]*$/;
const BTN = document.querySelector('[type="submit"]')
INPUT_ELEMENT.focus()
BTN.disabled=true



let SUBMIT;
function validEmailCheck(){
    let VALID=regex.test(INPUT_ELEMENT.value)?true:false
    if(VALID===false){
        document.forms[0].classList.add('invalid')
        SUBMIT=false
    }else{
        document.forms[0].classList.remove('invalid')
        SUBMIT=true;
        BTN.disabled=false
    }
}


INPUT_ELEMENT.addEventListener("input", validEmailCheck)

document.forms[0].addEventListener("submit",(e)=>{
    console.log(SUBMIT);

    if(SUBMIT){
        e.preventDefault()
        // ===> building the container
            document.body.firstElementChild.remove()
            const div=document.createElement("div")
            const svg = document.createElement("img")
            const article = document.createElement("article")
            const header = document.createElement("h1")
            const header_text = document.createTextNode("Thanks for subscribing!")
            const para = document.createElement("p")
            const para_text = document.createTextNode("A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.")
            const button = document.createElement("button")
        
            div.append(svg)
            svg.src="../assets/images/icon-list.svg"
            svg.style.inlineSize="76px"
            div.append(article)
            article.append(header)
            header.append(header_text)
            header.style.fontSize="3.73rem"
            header.style.marginBlockEnd="2.2rem"
            article.append(para)
            para.style.lineHeight="1.73rem"
            para.append(para_text)
            div.append(button)
            const button_text = document.createTextNode("Dismiss message")
            button.append(button_text)
            document.body.append(div)
        
            div.style.inlineSize="min(504px,100%)"
            div.style.background="#fff"
            div.style.borderRadius="36px"
            div.style.paddingInline="4.2rem"
            div.style.paddingBlock="2.66rem"
            div.style.display="flex"
            div.style.flexDirection="column"
            div.style.gap="2.1rem"
        // ===> the end of the container

    }else{
        return null
    }





})