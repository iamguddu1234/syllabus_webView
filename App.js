import logo from "./logo.svg";
import classes from "./App.module.css";
import "typeface-roboto";

import {
  BsFillBookFill,
  BsFillPersonVcardFill,
  BsPencilSquare,
  BsPersonFill,
  BsBookHalf,
  BsFillCameraVideoFill,
  BsFillFileEarmarkFill,
  BsLink45Deg,
} from "react-icons/bs";

import { BiLinkAlt } from "react-icons/bi";

import { MdDelete } from "react-icons/md";
import ReactSwitch from "react-switch";

function App() {
  return (
    <div className={classes.parentDiv}>
      <div className={classes.topNavbar}>
        <div className={classes.btnCollections}>
          <button className={classes.AboutBG}>
            <BsPersonFill className={classes.abouticon} />
            <div className={classes.AboutTitle}>About</div>
          </button>

          <button className={classes.syllabusBG}>
            <BsBookHalf className={classes.syllabusicon} />
            <div className={classes.syllabusTitle}>Syllabus</div>
          </button>

          <button className={classes.VideosBG}>
            <BsFillCameraVideoFill className={classes.Videosicon} />
            <div className={classes.VideosTitle}>Videos</div>
          </button>

          <button className={classes.FilessBG}>
            <BsFillFileEarmarkFill className={classes.Filesicon} />
            <div className={classes.FilesTitle}>Files</div>
          </button>

          <button className={classes.LinksBG}>
            <BsLink45Deg className={classes.linksIcon} />
            <div className={classes.LinksTitle}>Links</div>
          </button>
        </div>
      </div>

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

          <button className={classes.btnBg}>
            <div className={classes.buttonTitle}>Add A New Chapter</div>
          </button>
        </div>

        <div className={classes.secoundMain}>
          <button className={classes.btnBg1}>
            <div className={classes.buttonTitle1}>Import Syllabus</div>
          </button>

          <button className={classes.btnBg2}>
            <div className={classes.buttonTitle2}>Reset To Default</div>
          </button>

          <button className={classes.btnBg3}>
            <ReactSwitch className={classes.toggleBTN} />
            <div className={classes.buttonTitle3}>Edit Mode</div>
          </button>

          <div className={classes.toggleBtnContainer}></div>
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
            <button className={classes.addNewSectionButton}>
              <div className={classes.addNewSectionText}>Add New Section</div>
            </button>

            <div className={classes.horiIconDiv}>
              <button className={classes.editBG}>
                <BsPencilSquare className={classes.editICON} />
              </button>

              <button className={classes.deleteBG}>
                <MdDelete className={classes.deleteICON} />
              </button>
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
            <button className={classes.reditBG}>
              <BsPencilSquare className={classes.reditICON} />
            </button>

            <button className={classes.rdeleteBG}>
              <MdDelete className={classes.rdeleteICON} />
            </button>
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
            <button className={classes.reditBG}>
              <BsPencilSquare className={classes.reditICON} />
            </button>

            <button className={classes.rdeleteBG}>
              <MdDelete className={classes.rdeleteICON} />
            </button>
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
            <button className={classes.reditBG}>
              <BsPencilSquare className={classes.reditICON} />
            </button>

            <button className={classes.rdeleteBG}>
              <MdDelete className={classes.rdeleteICON} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
