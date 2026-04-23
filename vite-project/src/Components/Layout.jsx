import { DateOfBirth } from "./DateOfBirth/DateOfBirth";
import { GuessNum } from "./GuessNumber/GuessNumber";
import { RockPaperScirors } from "./RockPaperScirors/RockPaperScirors";
import { Calculator } from "./Calculator/Calculator";
import { TimeCalculator } from "./TimeCalculator/TimeCalculator";
import { Football } from "./Football/Football";
import { ThreeNum } from "./ThreeNumbers/ThreeNumbers";
import { OurTeam } from "./OurTeam/OurTeam";
import { Scienist } from "./Scienist/Scienist";

export const Layout = () => {
  return (
    <div>
      <DateOfBirth />
      <GuessNum />
      <RockPaperScirors />
      <Calculator />
      <TimeCalculator />
      <Football />
      <ThreeNum />
      <OurTeam />
      <Scienist />
    </div>
  );
};
