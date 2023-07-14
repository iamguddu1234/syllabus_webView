import logo from "./logo.svg";
import classes from "./App.module.css";
import "typeface-roboto";
import {
  BsFillBookFill,
  BsFillPersonVcardFill,
  BsPencilSquare,
} from "react-icons/bs";

import { MdDelete } from "react-icons/md";

function App() {
  return (
    <div className={classes.parentDiv}>
      <div className={classes.mainContainer}>
        <div className={classes.firstMain}>
          <div className={classes.firstContainer}>
            <div className={classes.topContainer}>
              <div className={classes.backgroundImg}>
                <BsFillBookFill className={classes.icon} />
              </div>
              <div className={classes.courserNameTitle}>Course Name</div>
              <div className={classes.threeDot}>:</div>

              <div className={classes.courserName}>Basic Of Biology</div>
            </div>

            <div className={classes.bottomContainer}>
              <div className={classes.backgroundImg}>
                <BsFillPersonVcardFill className={classes.icon} />
              </div>
              <div className={classes.courserCodeTitle}>Course Code</div>
              <div className={classes.threeDot}>:</div>
              <div className={classes.courserCode}>111234</div>
            </div>
          </div>

          <div className={classes.btnBg}>
            <div className={classes.buttonTitle}>Add A New Chapter</div>
          </div>
        </div>

        <div className={classes.secoundMain}>
          <div className={classes.btnBg1}>
            <div className={classes.buttonTitle1}>Import Syllabus</div>
          </div>

          <div className={classes.btnBg2}>
            <div className={classes.buttonTitle2}>Reset To Default</div>
          </div>
        </div>
      </div>

      <div className={classes.detailContainer}>
        <div className={classes.topTitleBar}>
          <div className={classes.firstSec}>
            <div className={classes.NubackgroundColor}>
              <div className={classes.numberText}>1</div>
            </div>

            <div className={classes.sectionMainTitle}>
              Android App Developement Advance
            </div>
          </div>

          <div className={classes.secoundSec}>
            <div className={classes.addNewSectionButton}>
              <div className={classes.addNewSectionText}>Add New Section</div>
            </div>

            <div className={classes.editBG}>
              <BsPencilSquare className={classes.editICON} />
            </div>

            <div className={classes.deleteBG}>
              <MdDelete className={classes.deleteICON} />
            </div>
          </div>
        </div>

        <div className={classes.horizontalLine}></div>

        <div className={classes.sectionMainContainer}>
          <div className={classes.leftSection}>
            <div className={classes.sectionNumber}>1.11</div>
            <div className={classes.sectionDetails}>
              Android is a mobile operating system based on a modified version
              of the Linux kernel and other open-source software, designed
              primarily for touchscreen mobile devices such as smartphones and
              tablets. Android is developed by a consortium of developers known
              as the Open Handset Alliance, though its most widely used version
              is primarily developed by Google. It was unveiled in November
              2007, with the first commercial Android device, the HTC Dream,
              being launched in September 2008.
            </div>
          </div>

          <div className={classes.rightSection}>
            <div className={classes.editBG}>
              <BsPencilSquare className={classes.editICON} />
            </div>

            <div className={classes.deleteBG}>
              <MdDelete className={classes.deleteICON} />
            </div>
          </div>
        </div>

        <div className={classes.sectionMainContainer}>
          <div className={classes.leftSection}>
            <div className={classes.sectionNumber}>1.11</div>
            <div className={classes.sectionDetails}>
              Android is a mobile operating system based on a modified version
              of the Linux kernel and other open-source software, designed
              primarily for touchscreen mobile devices such as smartphones and
              tablets. Android is developed by a consortium of developers known
              as the Open Handset Alliance, though its most widely used version
              is primarily developed by Google. It was unveiled in November
              2007, with the first commercial Android device, the HTC Dream,
              being launched in September 2008.
            </div>
          </div>

          <div className={classes.rightSection}>
            <div className={classes.editBG}>
              <BsPencilSquare className={classes.editICON} />
            </div>

            <div className={classes.deleteBG}>
              <MdDelete className={classes.deleteICON} />
            </div>
          </div>
        </div>

        <div className={classes.sectionMainContainer}>
          <div className={classes.leftSection}>
            <div className={classes.sectionNumber}>1.11</div>
            <div className={classes.sectionDetails}>
              Android is a mobile operating system based on a modified version
              of the Linux kernel and other open-source software, designed
              primarily for touchscreen mobile devices such as smartphones and
              tablets. Android is developed by a consortium of developers known
              as the Open Handset Alliance, though its most widely used version
              is primarily developed by Google. It was unveiled in November
              2007, with the first commercial Android device, the HTC Dream,
              being launched in September 2008.
            </div>
          </div>

          <div className={classes.rightSection}>
            <div className={classes.editBG}>
              <BsPencilSquare className={classes.editICON} />
            </div>

            <div className={classes.deleteBG}>
              <MdDelete className={classes.deleteICON} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
