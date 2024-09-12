import React from "react";
import data from "../layout/Data";
import CardUi from "../layout/CardUi"
class Contact extends React.Component {
    render() {
        return (
            <>
                <div className="container my-5">
                    <div className="row">
                        {data.map((element) => {
                            return (
                                <div className="col-lg-4">
                                    <CardUi
                                        title={element.title}
                                        para={element.para}
                                        image={element.image}
                                    ></CardUi>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        )
    }
}
export default Contact