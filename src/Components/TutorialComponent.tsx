
interface OnboardingMessageProps {
    handleClose: () => void;
  }

  const TutorialComponent: React.FC<OnboardingMessageProps> = ({ handleClose }) => {
  
    return (
        <div className="tutorial">
            <div className="tutorialOverlay">
                <div className="cutout"><i className="bi-list text-xl leading-none "></i></div>
                <div className="tutorialMessage">
                    <p>Click the burger icon to explore the application!</p>
                    <button className="" onClick={handleClose}>Ok</button>
                </div>
            </div>
        </div>
    );
  };
export default TutorialComponent;