const handlearCategory= async(textSearch)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${textSearch}`)
    const getData= await res.json()
    const phone=getData.data;
    display(phone)
}


const display=(phone)=>{
    const container=document.getElementById('main-container')
    container.textContent=''
    const showAll=document.getElementById('containerShowAlld')
    if(phone.length > 12){
        showAll.classList.remove('hidden')
    }else{
        showAll.classList.add('hidden')
    }
    phone=phone.slice(0,12)
    phone.forEach((getPhone)=>{
        const phoneCard=document.createElement('div')
        phoneCard.classList=` bg-base-200 shadow-xl `;
        phoneCard.innerHTML=`

        <figure class="px-10 pt-10">
        <img src="${getPhone.image}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${getPhone.brand}</h2>
        <h3>${getPhone.phone_name}</h3>
        <p>${getPhone.slug}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
        
        `
        container.appendChild(phoneCard)
    })

}


const handlerButton=()=>{
    const inputSearch=document.getElementById('input-search')
    const getValue=inputSearch.value;
    inputSearch.value=" "
    handlearCategory(getValue)
    

}
// handlearCategory()