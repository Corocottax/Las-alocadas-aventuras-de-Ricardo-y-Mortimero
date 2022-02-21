import "./PlanetsDetail.scss"
import { PlanetsDetails } from "../Galeria/PlanetsDetails"

export const PlanetsDetail = ({residents}) => {

    console.log(residents);

  return (
  <div>

    <PlanetsDetails residents={residents}/>

  </div>
  );
};
