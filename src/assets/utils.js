const flattenPractitionerObj = (response) => {
    return (response.data.entry || []).map((item) => {
      const name = item.resource.name || [];
      return {
        id: item.resource.id,
        name: `${((name[0] || {}).given || []).join(" ")} ${
          (name[0] || {}).family
        }`,
        gender: item.resource.gender,
        dob: item.resource.birthDate,
        photo:
          "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      };
    });
  };

  export default flattenPractitionerObj;