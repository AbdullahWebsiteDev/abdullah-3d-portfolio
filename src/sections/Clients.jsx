import { clientReviews } from "../constants/index";

const Clients = () => {
  return (
    <section className="my-20 c-space">
      <h3 className="head-text">Hear from My Clients</h3>
      <div className="client-container">
        {clientReviews.map(({ id, name, review, img, position }) => (
          <div key={id} className="client-review">
            <div>
              <p className="font-light text-white">{review}</p>
              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={img}
                    alt={name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-sm font-light text-white-500 md:text-base">{position}</p>
                  </div>
                </div>
                <div className="flex items-center self-end gap-2">
                    {Array.from({length: 5}).map((_, index)=>(
                        <img key={index} src="/assets/star.png" className="w-5 h-5" />
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
