	mov r0, #1
	mov r1, #0
repeat: add r1, r0, r1
	add r0, r0, #1
	cmp r0, #10		//the immediate value here, should be 11 and not 10. I'm not going to change it until I find out why. 
	blt repeat
	str r1, .WriteUnsignedNum
	halt