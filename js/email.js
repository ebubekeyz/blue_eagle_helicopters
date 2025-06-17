
const formBtn = document.querySelector('#btn')
const firstName = document.querySelector('#first_name')
const lastName = document.querySelector('#last_name')
const email = document.querySelector('#email')
const contactType = document.querySelector('#type_id')
const press = document.querySelector('#all-press-releases')
const events = document.querySelector('#event_alert')
const presentation = document.querySelector('#presentation_alert')
const stock = document.querySelector('#stock_alert_end_of_day')
const secAll = document.querySelector('#ir-sec-all')
const secAnnual = document.querySelector('#sec-annual-reports')
const secCurrent = document.querySelector('#sec-current-reports')
const secInsider = document.querySelector('#sec-insider-transactions')
const secProxy = document.querySelector('#sec-proxy-information')
const ir = document.querySelectorAll('.ir-sec-sub')




ir.forEach((e) => {
    e.addEventListener('click', () => {
        let notificationType = {
    notificationType: `${e.value}`
        }
        localStorage.setItem("subscription", JSON.stringify(notificationType));
        
    })
})



formBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    console.log('hello')
    const firstNameValue = firstName.value
    const lastNameValue = lastName.value
    const emailValue = email.value
    const contactTypeValue = contactType.value
  

    const get = JSON.parse(localStorage.getItem("subscription")) ;
    console.log(get.notificationType)
    const notificationTypeValue = get.notificationType

    console.log(firstNameValue)
    console.log(lastNameValue)
    console.log(emailValue)
    console.log(contactTypeValue)
    console.log(notificationTypeValue)
   

  
    try {
        formBtn.value = `submitting...`
        const list = { firstName: firstNameValue, lastName: lastNameValue, email: emailValue, contactType: contactTypeValue, notificationType: 'jjj' }
        
        await axios.post('https://blueedge-server.onrender.com/api/subscription', list)

        formBtn.value = `submitted`
       firstName.value = ``
        lastName.value = ``
       email.value = ``
       contactType.value = ``
        press.value = ``
      events.value = ``
       presentation.value = ``
        stock.value = ``
        secAll.value = ``
       secCurrent.value = ``
        secInsider.value = ``
       secAnnual.value = ``
       secProxy.value = ``

        window.location.reload()
        
    }
    catch (error) {
        console.log(error)
       }
    

  
      
    })



