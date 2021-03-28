import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export default function JoinTeamDialog(props) {
  const { getTeamsQuery = {} } = props;
  const { teams = [] } = getTeamsQuery;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setstate] = useState({ selectedId: "" });

  const handleSelect = (selectedId) => {
    setstate({
      selectedId,
    });
  };

  const handleClode = (e) => {
    setstate({
      selectedId: "",
    });
    onClose(e);
  };

  const renderTeams = () => {
    return teams.map((team) => (
      <div className="mini-team">
        <div className="icon">
          {state.selectedId === team.id && <span> &#10148;</span>}
        </div>
        <div className={`card ${state.selectedId === team.id && "selected"}`}>
          <img className="team-logo" src={team.logo} alt="team" />
          <div
            className={`card__infor`}
            onClick={() => {
              handleSelect(team.id);
            }}
          >
            <div>Name: {team.name}</div>
            <div>Member: {team.players.length}</div>
          </div>
        </div>
      </div>
    ));
  };

  const handleSubmit = () => {
    props.onsubmit &&
      props.onsubmit({
        teamId: state.selectedId,
        playerId: props.playerId,
      });
    handleClode();
  };

  return (
    <>
      <Button className="mt-1" colorScheme="teal" onClick={onOpen}>
        Join Team
      </Button>

      <Modal isOpen={isOpen} onClose={handleClode}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose The Team</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{renderTeams()}</ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={handleClode}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Choose
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
