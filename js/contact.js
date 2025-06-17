
const formBtn = document.querySelector('#contact-form')
const name = document.querySelector('#name')
const company = document.querySelector('#company')
const email = document.querySelector('#email')
const interestedIn = document.querySelector('#interested_in')
const comments = document.querySelector('#comments')


formBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    const name1 = name.value
    const company1 = company.value
    const email1 = email.value
    const interestedIn1 = interestedIn.value
    const comments1 = comments.value
    console.log(name1)
    console.log(company1)
    console.log(email1)
    console.log(interestedIn1)
    console.log(comments1)


    try {
        formBtn.value = `submitting...`
        const list = { name: name1, email: email1, company: company1, interest: interestedIn1, message: comments1 }
        
        await axios.post('https://blueedge-server.onrender.com/api/contact', list)

        formBtn.value = `submitted`
        name.value = ``
    company.value = ``
    email.value = ``
    interestedIn.value = ``
        comments.value = ``

        window.location.reload()
        
    }
    catch (error) {
        console.log(error)
       }
    

  
      
    })



// const displayContacts = async()=> {
//     try {
//         const resp = await axios.get('http://localhost:7000/api/contact')

//     console.log(resp.data)
//     } catch (e) {
//         console.log(e)
//    }
// }
    
// displayContacts()