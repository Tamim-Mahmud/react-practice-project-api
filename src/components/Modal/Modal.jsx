import React from "react";

const Modal = (props) => {
  const {
    image_link,
    input_output_examples,
    description,
    integrations,
    features,
    accuracy,
    logo,
    pricing,
  } = props.singleData;
  console.log(input_output_examples ? input_output_examples[0] : null);
  const newFeatures = Object.values(features || {});
  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 ">
            <div className="card-body">
              <p>{description}</p>
              <div className=" flex justify-between items-center">
                <div className="">
                  <h2 className="font-bold text-xl">Featchers</h2>
                  <div className="">
                    {newFeatures.map((newFeature) => (
                      <li>{newFeature.feature_name}</li>
                    ))}
                  </div>
                </div>
                <div className="">
                  <h2 className="font-bold text-xl">Integrations</h2>
                  <div className="">
                    {integrations?.map((integration) => (
                      <li>{integration}</li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="">
            <figure className="w-full h-64">
              <img src={image_link ? image_link[0] : null} alt="Album" />
            </figure>
            <div className="text-center mt-5">
              <h1 className="font-bold mb-3">
                {input_output_examples ? input_output_examples[0].input : null}
              </h1>
              <h1>
                {input_output_examples ? input_output_examples[0].output : null}
              </h1>
            </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
