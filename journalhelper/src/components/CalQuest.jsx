import React, { useState } from 'react';

function CalQuest() {
  const [name, setName] = useState('');
  const [program, setProgram] = useState('');
  const [statement, setStatement] = useState('');
  const [accomplishment, setAccomplishment] = useState('');
  const [disposition, setDisposition] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set submitted to true to trigger rendering of submitted content
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Program:
          <input type="text" placeholder="CF/CW/GR/MC" value={program} onChange={(e) => setProgram(e.target.value)} />
        </label>
        <br />
        <label>
          What is the person stating:
          <input type="text" value={statement} onChange={(e) => setStatement(e.target.value)} />
        </label>
        <br />
        <label>
          What are we trying to do with them:
          <input type="text" value={accomplishment} onChange={(e) => setAccomplishment(e.target.value)} />
        </label>
        <br />
        <label>
          Disposition:
          <input type="text" value={disposition} onChange={(e) => setDisposition(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <p>PT authenticated and informed of BenefitsCal.com website.</p>
          PT {name} called in regards to {program} program
          PT {name} stated that {statement} and they're trying to {accomplishment}
          Best # to reach PT
          <p>{disposition}</p>
        </div>
      )}
    </div>
  );
}

export default CalQuest;
