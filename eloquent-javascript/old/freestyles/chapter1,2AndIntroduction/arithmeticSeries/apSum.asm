	mov r0, #5
	mov r1, #23
	mov r2, #3
	mov r3, r0
repeat: add r0, r0, r2
	add r3, r0, r3
	cmp r1, r0
	bgt repeat
	str r3, .WriteUnsignedNum
	halt