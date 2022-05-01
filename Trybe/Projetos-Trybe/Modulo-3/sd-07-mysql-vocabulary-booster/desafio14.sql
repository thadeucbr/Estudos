SELECT Country AS 'País' FROM w3schools.customers
UNION
SELECT Country FROM w3schools.suppliers
ORDER BY País LIMIT 5;
/* Consultei o PR https://github.com/tryber/sd-07-mysql-vocabulary-booster/pull/5/files */
