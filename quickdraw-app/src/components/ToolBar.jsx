import React from 'react'
// stores
import ButtonTool from './buttons/ButtonTool';
import {
  selectionIcon,
  handIcon,
  freedrawIcon,
  lineIcon,
  ellipseIcon,
  rectangleIcon,
  textIcon,
  eraserIcon,
  imageIcon

} from './icons'

function ToolBar() {
  return (
    <div className="bg-[#1d1d1d] w-fit mx-auto p-2
                    absolute bottom-0 left-[50%] translate-x-[-50%]
                    flex gap-2 rounded-xl shadow-lg ">

      <ButtonTool name={"selection"} icon={selectionIcon} />
      <ButtonTool name={"hand"} icon={handIcon} />
      <ButtonTool name={"freedraw"} icon={freedrawIcon} />
      <ButtonTool name={"line"} icon={lineIcon} />
      <ButtonTool name={"rectangle"} icon={rectangleIcon} />
      <ButtonTool name={"ellipse"} icon={ellipseIcon} />
      <ButtonTool name={"text"} icon={textIcon} />
      <ButtonTool name={"eraser"} icon={eraserIcon} />
      {/* <ButtonTool name={"image"} icon={imageIcon} /> */}

      {/* future feature reserve */}
      {/* <button
        className="bg-neutral-800 text-white w-fit px-2 pointer-events-auto
                    flex items-center
                    rounded-xl shadow-lg overflow-hidden">

        <p>Generate</p>
      </button> */}
    </div>
  )
}

export default ToolBar