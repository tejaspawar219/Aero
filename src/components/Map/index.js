import React from "react";
import { Heading, Line, Wrapper } from "../../pages/styles";

function Map() {
  return (
    <Wrapper style={{ aspectRatio: "3/2" }}>
      <Heading>Locate Us</Heading>
      <Line />
      <iframe
        title="RGIT Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15078.756203599194!2d72.8237143!3d19.1212925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5767a74a751ccaf9!2sRajiv%20Gandhi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1642010774260!5m2!1sen!2sin"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        aria-hidden="false"
      />
    </Wrapper>
  );
}

export default Map;
