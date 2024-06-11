

function If(){
    const random= Math.floor(Math.random()*100-1);
    let score="";
    if(random>50){
        score="You Pass Exam !";
    }else{
        score="You False Exam !";
    }
    	return (
            <>
                    <h1>My Name Koko </h1>
                    <h3>This Score is {random}</h3>
                    <h3>Status is {score}</h3>
            </>
        );
}
export default If