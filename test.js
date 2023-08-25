// Parse the HTML content
const document = parse5.parse(htmlContent);

// Recursive function to find elements with two class attributes
function findElementsWithTwoClasses(node) {
    if (node.attrs) {
        const classAttribute = node.attrs.find(attr => attr.name === 'class');

        if (classAttribute && classAttribute.value.split(' ').length === 2) {
            const serializedNode = parse5.serialize(node);
            console.log(`Element with two classes: ${serializedNode}`);
        }
    }

    if (node.childNodes) {
        for (const childNode of node.childNodes) {
            findElementsWithTwoClasses(childNode);
        }
    }
}
