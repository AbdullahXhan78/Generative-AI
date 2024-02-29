function describe_city(name, country) {
    if (name === void 0) { name = 'Karachi'; }
    if (country === void 0) { country = 'Pakistan'; }
    console.log(name, "is in", country);
}
describe_city();
describe_city('Beijing', 'China');
describe_city('Berlin', 'Germany');
describe_city('Baghdad', 'Iraq');
