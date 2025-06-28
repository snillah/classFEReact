import React from "react";

function Office() {
  return (
    <div>
      <h1>Office</h1>
      <OfficeWorkArea />
      <ConferenceRoom />
    </div>
  );
}

export default Office;

function OfficeWorkArea() {
  return (
    <>
      <div style={{ margin: "12px" }}>
        <h2>Office Work Area</h2>
        <OfficeLaptop />
        <Mobile />
      </div>
    </>
  );
}
function OfficeLaptop() {
  return (
    <>
      <h4>Office Laptop</h4>
    </>
  );
}

function Mobile() {
  return (
    <>
      <h4>Mobile</h4>
    </>
  );
}

function ConferenceRoom() {
  return (
    <>
      <div style={{ margin: "12px" }}>
        <h2>Conference Room</h2>
        <Projector />
      </div>
    </>
  );
}

function Projector() {
  return (
    <>
      <h4>Projector</h4>
    </>
  );
}
