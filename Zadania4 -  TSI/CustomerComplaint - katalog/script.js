function validateForm() {
  const fullName = document.getElementById('full-name');
  const email = document.getElementById('email');
  const orderNo = document.getElementById('order-no');
  const productCode = document.getElementById('product-code');
  const quantity = document.getElementById('quantity');
  const complaintDescription = document.getElementById('complaint-description');
  const solutionDescription = document.getElementById('solution-description');

  const complaintsGroup = document.querySelectorAll('#complaints-group input[type="checkbox"]');
  const solutionsGroup = document.querySelectorAll('#solutions-group input[type="radio"]');

  const complaintsChecked = Array.from(complaintsGroup).some(cb => cb.checked);
  const solutionsChecked = Array.from(solutionsGroup).some(rb => rb.checked);

  const otherComplaint = document.getElementById('other-complaint').checked;
  const otherSolution = document.getElementById('other-solution').checked;

  return {
    "full-name": fullName.value.trim() !== "",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
    "order-no": /^2024\d{6}$/.test(orderNo.value),
    "product-code": /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(productCode.value),
    quantity: /^[1-9]\d*$/.test(quantity.value),
    "complaints-group": complaintsChecked,
    "complaint-description": !otherComplaint || complaintDescription.value.trim().length >= 20,
    "solutions-group": solutionsChecked,
    "solution-description": !otherSolution || solutionDescription.value.trim().length >= 20,
  };
}

function isValid(results) {
  return Object.values(results).every(Boolean);
}

function setFieldValidity(element, valid, isGroup = false) {
  const styleTarget = isGroup ? element : element.style;
  if (isGroup) {
    element.style.border = valid ? '2px solid green' : '2px solid red';
  } else {
    element.style.borderColor = valid ? 'green' : 'red';
  }
}

function handleChange(e) {
  const results = validateForm();

  setFieldValidity(document.getElementById('full-name'), results["full-name"]);
  setFieldValidity(document.getElementById('email'), results.email);
  setFieldValidity(document.getElementById('order-no'), results["order-no"]);
  setFieldValidity(document.getElementById('product-code'), results["product-code"]);
  setFieldValidity(document.getElementById('quantity'), results.quantity);
  setFieldValidity(document.getElementById('complaints-group'), results["complaints-group"], true);
  setFieldValidity(document.getElementById('complaint-description'), results["complaint-description"]);
  setFieldValidity(document.getElementById('solutions-group'), results["solutions-group"], true);
  setFieldValidity(document.getElementById('solution-description'), results["solution-description"]);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const fieldsToWatch = [
    'full-name', 'email', 'order-no', 'product-code', 'quantity',
    'complaint-description', 'solution-description'
  ];

  fieldsToWatch.forEach(id => {
    document.getElementById(id).addEventListener('change', handleChange);
  });

  document.querySelectorAll('#complaints-group input').forEach(el => el.addEventListener('change', handleChange));
  document.querySelectorAll('#solutions-group input').forEach(el => el.addEventListener('change', handleChange));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = validateForm();
    handleChange();

    if (isValid(result)) {
      alert("Form submitted successfully!");
    } else {
      alert("Please correct the highlighted fields.");
    }
  });
});
