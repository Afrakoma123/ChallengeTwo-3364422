class SearchSuggestionSystem {
  constructor(products) {
    // Sort products lexicographically
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const result = [];
    let prefix = "";

    for (let char of searchWord) {
      prefix += char;

      // Filter products that start with the current prefix
      const matches = this.products.filter(product => product.startsWith(prefix));

      // Push up to 3 suggestions
      result.push(matches.slice(0, 3));
    }

    return result;
  }
}