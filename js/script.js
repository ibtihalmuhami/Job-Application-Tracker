let interviewList = [];
let rejectedList = [];


let total = document.getElementById('total')
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount')

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allCardSection = document.getElementById('allCard');
const maincontainer = document.querySelector('main')
const filteredSection = document.getElementById('filtered-section')

// const allFilterBtn = document.getElementById('all-filter-btn')
// allFilterBtn.addEventListener('click', function(){
//     alert("click from add even")
// })

function calculateCount(){

    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length

}
calculateCount()
function toggleStyle(id){
    // adding gray bg for all
    // console.log("click",id);
    allFilterBtn.classList.remove('bg-blue-700' , 'text-amber-50')
    interviewFilterBtn.classList.remove('bg-blue-700' , 'text-amber-50')
    rejectedFilterBtn.classList.remove('bg-blue-700' , 'text-amber-50')
    // if any button is black then remove

    allFilterBtn.classList.add('bg-gray-200' , 'text-black')
    interviewFilterBtn.classList.add('bg-gray-200' , 'text-black')
    rejectedFilterBtn.classList.add('bg-gray-200' , 'text-black')
    const selected = document.getElementById(id)

    selected.classList.remove('bg-gray-200','text-black')
    selected.classList.add('bg-blue-700', 'text-amber-50')

    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden')
    }else if( id == 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden')
    }

}

maincontainer.addEventListener('click',function(event){
    console.log(event.target.classList.contains('interview-btn'))
    if(event.target.classList.contains('interview-btn')){

        const parentNode = event.target.parentNode.parentNode;
        const firstName  = parentNode.querySelector('.firstName ').innerText
        const secondName = parentNode.querySelector('.secondName').innerText
        const thirdName = parentNode.querySelector('.thirdName').innerText
        const status = parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText
        const interviewBtn = parentNode.querySelector('.interview-btn').innerText
        const rejectedBtn = parentNode.querySelector('.rejected-btn').innerText
    
        const cardInfo ={
            firstName ,
            secondName,
            thirdName,
            status,
            notes,
            interviewBtn,
            rejectedBtn
    
    
        }
    
        const interviewExist = interviewList.find(item=> item.interviewBtn == cardInfo.interviewBtn)
        parentNode.querySelector('.status').innerText = "interview"
        if(!interviewExist) {
            interviewList.push(cardInfo)
    
        }
        randerInterview()

    }
    

})

function randerInterview(){
    filteredSection.innerHTML = ''

    for (let interview of interviewList){
        console.log(interview)
        let div = document.createElement('div');
        div.className = 'card  flex justify-between border'
        div.innerHTML = `
                        <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="firstName font-semibold">Mobile First Corp</p>
                        <p class="secondName text-gray-400">React Native Developer</p>
                    </div>
                    <div>
                        <p class="thirdName  text-gray-400">Remote • Full-time • $130,000 - $175,000</p>

                    </div>
                    <!-- part 3 -->
                    <div>
                        <p class="status">Not Applied</p>
                        <p class="notes">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                        
                    </div>
                    <div class="flex gap-5">
                        <button class="interview-btn  border border-green-600 text-green-600 px-4 py-2">Interview</button>
                        <button class="rejected-btn border border-red-600 text-red-600 px-4 py-2">Rejected</button>
                    </div>
                </div>
                <!-- main part 2 -->
                <div>
                    <button class="btn-dlt border rounded-full px-2 py-2"><i class="fa-regular fa-trash-can"></i>
                </div>


      `
      filteredSection.appendChild(div)
    }

}

