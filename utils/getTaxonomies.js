const getTaxonomies = (wpTerm) => {
  return wpTerm.reduce((accumulator, currentValue) => {
    if (!currentValue.length) {
      return accumulator;
    }

    let taxo = { ...accumulator };

    currentValue.forEach((item) => {
      const addedTaxo = {
        id: item.id,
        name: item.name,
        slug: item.slug,
        taxonomy: item.taxonomy,
      };
      taxo[item.taxonomy] = taxo[item.taxonomy]
        ? [...taxo[item.taxonomy], addedTaxo]
        : [addedTaxo];
    });

    return { ...taxo };
  }, {});
};

export default getTaxonomies;
