import ReactStars from "react-rating-stars-component";
import { addToDb } from "../../FakeDb/fakeDb";
// eslint-disable-next-line react/prop-types
const FormModal = ({ showsData }) => {
  console.log(showsData);
  const handleAddMovie = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form?.name.value;
    const id = form?.id.value;
    const language = form?.language.value;
    const day = form.day.value ? form.day.value : "Friday";
    const time = form?.Time.value ? form?.Time.value : "15.20";
    const quantity = form?.quantity.value;
    const email = form?.email.value;
    const BookingTicket = { id ,email, name, language, day  , time, quantity };
    console.log(BookingTicket);
    addToDb(BookingTicket);
  };
  return (
    <div>
      <label for="my_modal_6" className="btn">
        Buy ticket 
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleAddMovie} className="card-body">
            <div className="md:flex justify-between w-full">
              <div className="md:w-3/4">
                <div className="form-control md:w-3/4 ">
                  <label className="label">
                    <span className="label-text">Movie Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={showsData?.name}
                    placeholder="Movie Name"
                    className="input input-bordered w-full "
                    disabled
                  />
                </div>
                <div className="form-control md:w-3/4 ">
                  <input
                    type="text"
                    name="id"
                    value={showsData?.id}
                    placeholder="Movie Name"
                    className="input input-bordered w-full hidden"
                  />
                </div>
                <div className="form-control md:w-3/4 ">
                  <label className="label">
                    <span className="label-text">language</span>
                  </label>
                  <input
                    type="text"
                    name="language"
                    value={showsData?.language}
                    placeholder="language"
                    className="input input-bordered w-full "
                    disabled
                  />
                </div>
                <div className="form-control md:w-3/4 ">
                  <label className="label">
                    <span className="label-text">email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered w-full "
                    required
                  />
                </div>
              </div>
              <div className="md:w-3/4 ms-0">
                {showsData?.schedule?.time && (
                  <div className="form-control md:w-3/4 md:ml-auto">
                    <label className="label">
                      <span className="label-text">Time</span>
                    </label>
                    <input
                      type="text"
                      name="Time"
                      value={showsData?.schedule?.time}
                      placeholder="Movie Name"
                      className="input input-bordered w-full "
                      disabled
                    />
                  </div>
                )}
                {showsData?.schedule?.days.length > 0 && (
                  <div className="form-control md:w-3/4 md:ml-auto">
                    <label className="label">
                      <span className="label-text">Day</span>
                    </label>
                    <input
                      type="text"
                      name="day"
                      value={showsData?.schedule?.days[0]}
                      placeholder="type"
                      className="input input-bordered w-full "
                      disabled
                    />
                  </div>
                )}
                <div className="form-control md:w-3/4 md:ml-auto">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Quantity"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
            </div>
            <input
              type="submit"
              value="Ticket Buy Now"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg "
            />
          </form>
          <div className="modal-action">
            <label for="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
