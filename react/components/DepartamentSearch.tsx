import React, { useState } from "react";
import { useQuery } from "react-apollo";
import Query_Departament from "../graphql/getDepartamentGroup.graphql";
import DepartamentGroup from "./DepartamentGroup";
import { SearchBar } from "vtex.store-components";
import { useCssHandles } from "vtex.css-handles";
import "../styles/style.css";

const DepartamentSearch = () => {
  const { data, loading } = useQuery(Query_Departament);
  const [slug, setSlug] = useState("");

  const styles = [
    "container",
    "loading",
    "title"
  ];

  const handles = useCssHandles(styles)

  return (
    loading 
    ? 
    <div className={handles.loading}>Cargando...</div> 
    :
    <>
      <h2 className={handles.title}>Departamentos</h2>
      <div className={handles.container}>
        <DepartamentGroup 
          departments={data?.categories[3]?.children}
          handleSetSlug={setSlug}
        />
        <SearchBar 
          customSearchPageUrl={slug}
          placeholder="Buscar en el departamento"
          maxWidth="400px"
        />
      </div>
    </>
  )
}

export default DepartamentSearch;