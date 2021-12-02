import React, { Component } from 'react';

class Hint extends Component {
  render() {
    return (
      <>
        <ul className="hintContainer">
          <li className="hint">The Brit lives in the red house</li>
          <li className="hint">The Swede keeps dogs as pets</li>
          <li className="hint">The Dane drinks tea</li>
          <li className="hint">
            The green house is on the left of the white house
          </li>
          <li className="hint">The green house’s owner drinks coffee</li>
          <li className="hint">The person who smokes Pall Mall rears birds</li>
          <li className="hint">The owner of the yellow house smokes Dunhill</li>
          <li className="hint">
            The man living in the center house drinks milk
          </li>
          <li className="hint">
            The Norwegian lives in the first (leftmost) house
          </li>
          <li className="hint">
            The man who smokes Blends lives next to the one who keeps cats
          </li>
          <li className="hint">
            The man who keeps horses lives next to the man who smokes Dunhill
          </li>
          <li className="hint">The owner who smokes BlueMaster drinks beer</li>
          <li className="hint">The German smokes Prince</li>
          <li className="hint">The Norwegian lives next to the blue house</li>
          <li className="hint">
            The man who smokes Blends has a neighbor who drinks water
          </li>
        </ul>
        <p className="solutionInstructions">
          Use the below table to eliminate possibilities, to find out who owns
          the fish
        </p>
        <p className="solutionInstructions">
          It's rumored that only 2% of the world can solve this puzzle
        </p>
      </>
    );
  }
}

export default Hint;
