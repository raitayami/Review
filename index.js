class PersonReview{
    constructor(name, role, review, bio){
        this.name = name;
        this.role = role;
        this.review = review;
    }

}


const sagarReview = new PersonReview('Sagar Limbu', 'Financial Advisor', 'Loved this so much, so helpful')

const daanishReview = new PersonReview('Daanish Khan', 'Civil Service', 'Pretty handy, did not know things like this existed');

const kundanReview = new PersonReview('Kundan Lama', 'Accountant', 'Amazing service, amazing!')

const arbinReview = new PersonReview('Arbin Bahik', 'Project Manager', 'Saved so much time, really grateful.')

const reviewArr = [sagarReview, daanishReview, kundanReview, arbinReview]

const nextReviewBtn = document.getElementById('nextReview');

nextReviewBtn.addEventListener('click', ()=>{
    reviewArr.forEach(element => {
        const reviewName = document.getElementById('name');
    
        const reviewRole = document.getElementById('role');
    
        const reviewReview = document.getElementById('review');
    
        reviewName.innerHTML = element.name;
        reviewRole.innerHTML = element.role;
        reviewReview.innerHTML = element.review
    
    });
})



