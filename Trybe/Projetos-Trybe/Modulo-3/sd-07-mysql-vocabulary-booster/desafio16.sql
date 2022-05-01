USE hr;
DELIMITER $$
CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(employee_email VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
DECLARE employee_total_jobs INT;
SELECT COUNT(jh.EMPLOYEE_ID) FROM hr.job_history AS jh
INNER JOIN hr.employees AS e
ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
WHERE email = employee_email INTO employee_total_jobs;
RETURN employee_total_jobs;
END $$
DELIMITER ;
