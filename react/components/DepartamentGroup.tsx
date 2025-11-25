import React from "react";
import { Category, Departments } from "../typings/departamentGroup";

const DepartamentGroup = ({ departments, handleSetSlug }: Departments) => {
  const onHandleSetSlug = (evento: any) => {
    handleSetSlug(`${evento.target.value}/$\{term\}&map=ft`);
  }

  const departamentsOptions: any = departments.map((department: Category) => {
    return (
      <option
       key={department.id}
       value={department.slug}
      >
        {department.name}
      </option>
    )
  })

  return (
    <div style={{ margin: "0 auto"}}>
      <select 
        name="selectDepartment" 
        id="selectDepartment" 
        defaultValue="value0" 
        onChange={onHandleSetSlug}
        >
        <option value="value0" disabled>Seleccione un departamento</option>
          {departamentsOptions}
        </select>
    </div>
  )
}

export default DepartamentGroup;