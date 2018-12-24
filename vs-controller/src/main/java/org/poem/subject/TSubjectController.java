package org.poem.subject;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 学科
 * @author poem
 */
@RestController
@RequestMapping("/v1/subject")
@Api(value = "/v1/subject",tags = {"学科"})
public class TSubjectController {


}
