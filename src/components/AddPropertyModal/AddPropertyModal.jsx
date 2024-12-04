import { Container, MantineProvider, Modal, Stepper } from "@mantine/core";
import { useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "../UploadImage/UploadImage";
import BasicDetails from "../BasicDetails/BasicDetails";
import Facilities from "../Facilities/Facilities";
import PropTypes from "prop-types";
import AddLocation from "../AddLocation/Addlocation";
const AddPropertyModal = ({ opened, setOpened }) => {
  const [active, setActive] = useState(0);
  const { user } = useAuth0();

  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: 0,
    country: "",
    city: "",
    address: "",
    facilities: {
      bedrooms: 0,
      parkings: 0,
      bathroom: 0,
    },
    userEmail: user?.email,
  });

  const nextStep = () => {
    setActive((current) => (current < 4 ? current + 1 : current));
  };

  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };
  return (
    <MantineProvider>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        closeOnClickOutside
        size={"90rem"}
      >
        <Container h={"40rem"} w={"100%"}>
          <Stepper active={active} onStepClick={setActive}>
            <Stepper.Step label="Location" description="Address">
              <AddLocation
                nextStep={nextStep}
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
              />
            </Stepper.Step>
            <Stepper.Step label="Images" description="Upload">
              <UploadImage
                prevStep={prevStep}
                nextStep={nextStep}
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
              />
            </Stepper.Step>
            <Stepper.Step label="Basic" description="Details">
              <BasicDetails
                prevStep={prevStep}
                nextStep={nextStep}
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
              />
            </Stepper.Step>

            <Stepper.Step>
              <Facilities
                prevStep={prevStep}
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
                setOpened={setOpened}
                setActiveStep={setActive}
              />
            </Stepper.Step>

            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
        </Container>
      </Modal>
    </MantineProvider>
  );
};

AddPropertyModal.propTypes = {
  opened: PropTypes.string.isRequired,
  setOpened: PropTypes.string.isRequired,
};

export default AddPropertyModal;
