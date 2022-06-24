import { Button } from "bootstrap";

const Skills = () => {
    return (
        <>

            <div className="bg-dark mt-5">

                <div>
                    <div className="text-light  rgba-stylish-strong py-5 px-4">
                        <div className="py-5">


                            <h1 className="text-light"> Skills</h1>
                            <p className="mb-4 pb-2 px-md-5 mx-md-5 mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                                obcaecati vero aliquid libero doloribus ad, unde tempora maiores, ullam, modi qui quidem minima debitis
                                perferendis vitae cumque et quo impedit.unde tempora maiores, ullam, modi qui quidem minima debitis
                                perferendis vitae cumque et quo impedit.unde tempora maiores, ullam, modi qui quidem minima debitis
                                perferendis vitae cumque et quo impedit.</p>


                        </div>
                        <div className="row">

                            <div className="container mt-3 col-md-4 col-sm-4">

                                <div className=" container mt-4" style={{ maxWidith: "300px" }}>
                                    <h1>C#</h1>
                                    <div className="progress mt-5">
                                        <div class="progress-bar bg-success" role="progressbar" style={{width: "25%", ariaValuenow:"25" ,ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                    </div>
                                    <h1>Asp .Net Web Api</h1>
                                    <div className="progress mt-5">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "50%", ariaValuenow:"50" ,ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                    </div>
                                    <h1>SQL</h1>
                                    <div className="progress mt-5">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "75%", ariaValuenow:"75" ,ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                    </div>
                                    <h1>C++</h1>
                                    <div className="progress mt-5">
                                        <div className="progress-bar bg-success" role="progressbar"style={{width: "100%", ariaValuenow:"100" ,ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}
export default Skills;


