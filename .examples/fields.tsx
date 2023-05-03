import {TextField} from "mui-rff";
import React from "react";

<TextField
  name="description"
  label="Description"
  //value="Test Description"
  placeholder=""
  className="input input-md"
  size={"small"}
/>


<TextField
  name="theme.0.titleColor"
  label="titleColor hidden"
  placeholder=""
  value={colorTitle}
/>

<TextField
  name="theme.1.descriptionColor"
  label="descriptionColor"
  placeholder=""
  // type="text"
  value={colorBg}
/>

<Checkbox
  {...label}
  checked={checked}
  onChange={handleCheck}
/>
<TextField name="theme.4.titleColor" label="Choice 1" />
{/*<TextField name="theme.3.descriptionColor" label="Choice 2" value={colorBg} />*/}
<TextField name="theme.2.text" label="Choice 3" />
